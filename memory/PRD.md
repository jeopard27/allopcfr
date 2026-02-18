# Allo PC Dépannage - Site Vitrine SEO

## Problem Statement
Site vitrine optimisé SEO pour Allo PC Dépannage, entreprise de dépannage informatique PC et Mac à Paris depuis 2002.

## Architecture
- **Frontend**: React.js + Tailwind CSS
- **Backend**: FastAPI (Python) + MongoDB
- **Design**: Thème tech/futuriste (fond sombre, accents dorés/cyan)
- **Polices**: Montserrat (titres) / Open Sans (corps)
- **Export HTML statique**: `/app/frontend/public/index-static.html`

## What's Been Implemented

### MVP v1-v3
- Structure de base, pages SEO, formulaire contact, WhatsApp, section télé-assistance TeamViewer, animation PC

### MVP v4 - 18 Fév 2026
- Thème futuriste sombre appliqué à tout le site (accueil, contact, localités)
- Page Contact refaite avec thème sombre
- Navbar améliorée
- FAQ supprimée partout
- Bandeau Hero avec photo pleine largeur + éclair visible + effet de débordement
- "Demander un devis" supprimé partout
- Pages localité converties au thème sombre
- Bug fix: variable CSS `--tech-orange` ajoutée (bouton footer corrigé)
- Export HTML statique autonome créé

### SEO - 18 Fév 2026
- **Meta tags** : title, description, keywords optimisés sur toutes les pages
- **Schema.org JSON-LD** : LocalBusiness avec adresse, téléphone, 6 services, avis, zones
- **Open Graph** : og:title, og:description, og:locale pour partage social
- **Mots-clés SEO** : dépannage informatique, dépannage PC, dépannage Mac, réparation ordinateur, technicien informatique Paris, etc. (20+ mots-clés)
- **Canonical URL** : allopcdepannage.fr
- **robots** : index, follow
- Pages localité avec title/description SEO uniques par ville

## Pages du site
- `/` - Accueil
- `/contact` - Contact thème sombre + WhatsApp
- `/depannage-pc-paris-16` - SEO Paris 16
- `/depannage-pc-paris-17` - SEO Paris 17
- `/depannage-pc-paris-8` - SEO Paris 8
- `/depannage-pc-neuilly-sur-seine` - SEO Neuilly
- `/depannage-informatique-levallois-perret` - SEO Levallois
- `/index-static.html` - Version HTML statique autonome

## Backlog
- P2: Backend formulaire contact → MongoDB/email
- P2: Blog SEO
- P3: Prise de RDV en ligne
