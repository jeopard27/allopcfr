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
- Navbar améliorée (alignement, séparateur, ligne dorée active)
- FAQ supprimée partout
- Bandeau Hero avec photo pleine largeur + éclair visible + effet de débordement
- "Demander un devis" supprimé partout (Hero, CTA, LocationPage)
- Pages localité converties au thème sombre (couleurs tech-dark, tech-cyan, tech-gold)
- Bug fix: variable CSS `--tech-orange` ajoutée (bouton footer invisible corrigé)
- **Export HTML statique** : fichier unique autonome créé

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
- P1: Schema.org / JSON-LD pour SEO local
- P2: Backend formulaire contact → MongoDB/email
- P2: Blog SEO
- P3: Prise de RDV en ligne

## Key Files
- `frontend/public/index-static.html` - HTML statique autonome
- `frontend/public/banner-hero.png` - Image du bandeau
- `frontend/src/components/sections/Hero.js` - Bandeau avec photo
- `frontend/src/components/layout/Navbar.js` - Navigation
- `frontend/src/pages/Contact.js` - Page contact thème sombre
- `frontend/src/pages/LocationPage.js` - Pages SEO localité (thème sombre)
- `frontend/src/index.css` - Styles globaux + animations
