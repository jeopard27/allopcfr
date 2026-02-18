from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(
    title="Allo PC Dépannage API",
    description="API pour le site vitrine Allo PC Dépannage",
    version="1.0.0"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Models
class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    location: Optional[str] = None
    service: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    location: Optional[str] = None
    service: Optional[str] = None
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

# SEO Data for locations
LOCATIONS_DATA = {
    "paris-16": {
        "name": "Paris 16ème",
        "slug": "paris-16",
        "title": "Dépannage PC et Mac Paris 16 | Allo PC Dépannage",
        "meta_description": "Dépannage informatique PC et Mac à Paris 16ème (75016). Intervention rapide 7j/7 à domicile. Réparation PC Windows, iMac, MacBook. Appelez le 01 40 88 30 30",
        "h1": "Dépannage PC et Mac Paris 16ème",
        "neighborhoods": ["Auteuil", "Passy", "Chaillot", "Muette", "Porte Dauphine", "Trocadéro"],
        "postal_code": "75016"
    },
    "paris-17": {
        "name": "Paris 17ème",
        "slug": "paris-17",
        "title": "Dépannage PC et Mac Paris 17 | Allo PC Dépannage - Siège Social",
        "meta_description": "Dépannage informatique PC et Mac à Paris 17ème (75017). Notre siège au 235 Bld Pereire. Intervention 7j/7, moins de 30 min. Appelez le 01 40 88 30 30",
        "h1": "Dépannage PC et Mac Paris 17ème",
        "neighborhoods": ["Batignolles", "Épinettes", "Ternes", "Plaine Monceau", "Pereire"],
        "postal_code": "75017"
    },
    "paris-8": {
        "name": "Paris 8ème",
        "slug": "paris-8",
        "title": "Dépannage PC et Mac Paris 8 | Allo PC Dépannage",
        "meta_description": "Dépannage informatique PC et Mac à Paris 8ème (75008). Champs-Élysées, Madeleine, Saint-Lazare. Intervention rapide 7j/7. Appelez le 01 40 88 30 30",
        "h1": "Dépannage PC et Mac Paris 8ème",
        "neighborhoods": ["Champs-Élysées", "Madeleine", "Saint-Lazare", "Europe", "Faubourg du Roule"],
        "postal_code": "75008"
    },
    "neuilly-sur-seine": {
        "name": "Neuilly-sur-Seine",
        "slug": "neuilly-sur-seine",
        "title": "Dépannage PC et Mac Neuilly-sur-Seine | Allo PC Dépannage",
        "meta_description": "Dépannage informatique PC et Mac à Neuilly-sur-Seine (92200). Intervention rapide à domicile 7j/7. Réparation iMac, MacBook, PC. Appelez le 01 40 88 30 30",
        "h1": "Dépannage PC et Mac Neuilly-sur-Seine",
        "neighborhoods": ["Ile de la Jatte", "Sablons", "Bagatelle", "Saint-James", "Château"],
        "postal_code": "92200"
    },
    "levallois-perret": {
        "name": "Levallois-Perret",
        "slug": "levallois-perret",
        "title": "Dépannage PC et Mac Levallois-Perret | Allo PC Dépannage",
        "meta_description": "Dépannage informatique PC et Mac à Levallois-Perret (92300). Intervention rapide 7j/7 pour particuliers et entreprises. Appelez le 01 40 88 30 30",
        "h1": "Dépannage PC et Mac Levallois-Perret",
        "neighborhoods": ["Front de Seine", "Louise Michel", "Président Wilson", "Gustave Eiffel"],
        "postal_code": "92300"
    }
}

SERVICES_DATA = [
    {
        "id": "depannage-urgent",
        "name": "Dépannage Urgent",
        "description": "Intervention rapide en moins de 30 minutes pour tous vos problèmes informatiques urgents.",
        "icon": "Zap"
    },
    {
        "id": "virus-securite",
        "name": "Virus & Sécurité",
        "description": "Suppression de virus, spywares, malwares et mise en place de protections efficaces.",
        "icon": "Shield"
    },
    {
        "id": "recuperation-donnees",
        "name": "Récupération Données",
        "description": "Récupération de vos données perdues sur disque dur, SSD, clé USB ou carte mémoire.",
        "icon": "HardDrive"
    },
    {
        "id": "installation-reseau",
        "name": "Installation Réseau",
        "description": "Configuration WiFi, réseau filaire, partage de connexion et sécurisation.",
        "icon": "Wifi"
    },
    {
        "id": "reparation-materiel",
        "name": "Réparation Matériel",
        "description": "Remplacement de composants, ajout mémoire, upgrade SSD, réparation hardware.",
        "icon": "Wrench"
    },
    {
        "id": "formation",
        "name": "Formation",
        "description": "Initiation et perfectionnement à l'informatique adaptés à votre niveau.",
        "icon": "GraduationCap"
    }
]

# Routes
@api_router.get("/")
async def root():
    return {"message": "Allo PC Dépannage API", "version": "1.0.0"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

@api_router.post("/contact", response_model=ContactResponse)
async def create_contact(input: ContactMessageCreate):
    try:
        contact_dict = input.model_dump()
        contact_obj = ContactMessage(**contact_dict)
        
        doc = contact_obj.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        await db.contacts.insert_one(doc)
        
        return ContactResponse(
            success=True,
            message="Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.",
            id=contact_obj.id
        )
    except Exception as e:
        logging.error(f"Error creating contact: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de l'envoi du message")

@api_router.get("/locations")
async def get_locations():
    return list(LOCATIONS_DATA.values())

@api_router.get("/locations/{slug}")
async def get_location(slug: str):
    if slug not in LOCATIONS_DATA:
        raise HTTPException(status_code=404, detail="Location not found")
    return LOCATIONS_DATA[slug]

@api_router.get("/services")
async def get_services():
    return SERVICES_DATA

# Include the router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
