# Allo PC Dépannage - Site Vitrine SEO

## Problem Statement
Site vitrine optimisé SEO pour Allo PC Dépannage, entreprise de dépannage informatique PC et Mac à Paris depuis 2002.

## Architecture
- **App React** : Frontend React + Tailwind (prévisualisation)
- **Site OVH** : PHP statique dans `/app/site-ovh/` (production)
- **Design** : Thème tech/futuriste sombre, accents dorés/cyan

## Site OVH (production)
Dossier `/app/site-ovh/` contient le site complet prêt pour hébergement mutualisé OVH :
- `index.php` - Accueil
- `contact.php` - Contact avec envoi email PHP
- 5 pages localité SEO (Paris 16/17/8, Neuilly, Levallois)
- `style.css` - CSS partagé
- `.htaccess` - URLs propres + cache + compression
- Includes PHP : header, footer, seo-head, location-template

## SEO
- Meta tags optimisés sur chaque page (20+ mots-clés)
- Schema.org JSON-LD LocalBusiness
- Open Graph pour partage social
- URLs SEO-friendly via .htaccess
- Canonical URLs

## Backlog
- P2 : Blog SEO avec articles optimisés
- P3 : Prise de RDV en ligne
