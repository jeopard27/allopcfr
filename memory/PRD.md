# Allo PC Dépannage - Site Vitrine SEO

## Problem Statement
Site vitrine optimisé SEO pour Allo PC Dépannage, entreprise de dépannage informatique PC et Mac à Paris depuis 2002.

## Architecture
- **Frontend**: React.js + Tailwind CSS
- **Backend**: FastAPI (Python) + MongoDB
- **Design**: Thème tech/futuriste (fond sombre, accents dorés/cyan)
- **Polices**: Montserrat (titres) / Open Sans (corps)

## What's Been Implemented

### MVP v1 - 13 Fév 2026
- Structure de base, pages SEO, formulaire contact

### MVP v2 - 13 Fév 2026
- Bandeau pleine largeur avec logo original
- Menu espacé avec effets hover et dropdown animé
- Animation PC (triste → réparation → heureux)

### MVP v3 - 13 Fév 2026
- Menu "Assistance informatique" remplace "Zones d'intervention"
- Section Télé-assistance avec TeamViewer
- WhatsApp ajouté sur page Contact
- Navigation corrigée pour scroll vers sections

### MVP v4 - 18 Fév 2026
- **Thème futuriste sombre** appliqué à tout le site
- **Page Contact refaite** avec thème sombre (bg-tech-dark, formulaire sombre, bordures cyan)
- **Navbar améliorée** : meilleur alignement, séparateur, espacement, ligne dorée active
- **FAQ supprimée** de la page d'accueil et des pages localité
- **Carte du monde supprimée** (confirmé absent)
- **Texte télé-assistance** : "Acceptez et autorisez la connexion" (étape 3)
- **Bandeau Hero avec photo** : Image du technicien intégrée avec effet de débordement (overflow)
- **Effet de continuité** : gradient de transition entre le bandeau et le contenu

## Pages du site
- `/` - Accueil (Hero avec bandeau photo, Services, Télé-assistance, Avantages, Zones, Témoignages, CTA)
- `/contact` - Contact avec thème sombre et WhatsApp
- `/depannage-pc-paris-16` - SEO Paris 16
- `/depannage-pc-paris-17` - SEO Paris 17 (siège)
- `/depannage-pc-paris-8` - SEO Paris 8
- `/depannage-pc-neuilly-sur-seine` - SEO Neuilly
- `/depannage-informatique-levallois-perret` - SEO Levallois

## Backlog
- P1: Schema.org / JSON-LD pour SEO local
- P1: Mettre les pages localité au thème sombre (actuellement ancien thème clair)
- P2: Backend formulaire contact → sauvegarde MongoDB ou envoi email
- P2: Blog avec articles SEO
- P3: Prise de RDV en ligne

## Key Files
- `frontend/src/components/sections/Hero.js` - Bandeau avec photo + débordement
- `frontend/src/components/layout/Navbar.js` - Navigation améliorée
- `frontend/src/pages/Contact.js` - Page contact thème sombre
- `frontend/src/pages/Home.js` - Page accueil (sans FAQ)
- `frontend/src/pages/LocationPage.js` - Pages SEO localité (sans FAQ)
- `frontend/src/index.css` - Styles globaux et animations tech
- `frontend/public/banner-hero.png` - Image du bandeau
