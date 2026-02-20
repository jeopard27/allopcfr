# Allo PC Dépannage - Site Vitrine SEO

## Problem Statement
Site vitrine optimisé SEO pour Allo PC Dépannage, entreprise de dépannage informatique PC et Mac à Paris depuis 2002. Le site doit être déployable sur un hébergement mutualisé OVH (PHP).

## Architecture
- **Site OVH (production)** : PHP statique dans `/app/site-ovh/` pour hébergement mutualisé
- **App React** : Frontend React + Tailwind (prévisualisation uniquement)
- **Design** : Thème tech/futuriste sombre, accents dorés (#f5a623) et cyan (#00d4ff)

## Site OVH - Structure
```
site-ovh/
├── .htaccess              ← HTTPS + URL rewriting + cache + sécurité
├── index.php              ← Accueil
├── contact.php            ← Contact avec formulaire email PHP
├── header.php             ← Navigation desktop + mobile (CSS checkbox toggle)
├── footer.php             ← Pied de page + barre d'appel mobile
├── seo-head.php           ← Meta tags SEO + JSON-LD + favicon
├── location-template.php  ← Template pages localité
├── style.css              ← CSS unique
├── 5 pages localité       ← Paris 16/17/8, Neuilly, Levallois
├── banner-hero.png        ← Bandeau principal
└── favicon.png            ← Icône navigateur
```

## Fonctionnalités implémentées
- Navigation desktop complète avec dropdown localités
- Menu mobile CSS pur (checkbox toggle) - sans JavaScript
- Formulaire de contact PHP (envoi email via mail())
- Pages SEO par localité avec contenu unique
- Barre d'appel fixe mobile
- Design responsive complet (mobile, tablette, desktop)
- Favicon sur toutes les pages

## SEO
- Meta tags (title, description, keywords) sur chaque page
- Schema.org JSON-LD LocalBusiness
- Open Graph pour partage social
- URLs propres via .htaccess
- Redirect HTTPS automatique
- Balises canonical

## Complété
- [x] Site PHP complet et fonctionnel
- [x] Menu mobile CSS pur fonctionnel
- [x] Responsive design validé (mobile + desktop)
- [x] Favicon intégré
- [x] SEO optimisé (meta tags, JSON-LD, Open Graph)
- [x] .htaccess (HTTPS, URL rewriting, cache, sécurité)
- [x] Formulaire de contact PHP

## Backlog
- P2 : Blog SEO avec articles optimisés
- P3 : Prise de RDV en ligne
- P3 : Optimisation des images (compression)
