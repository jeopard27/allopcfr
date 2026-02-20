# Allo PC Dépannage - Site Vitrine SEO

## Problem Statement
Site vitrine optimisé SEO pour Allo PC Dépannage, entreprise de dépannage informatique PC et Mac à Paris depuis 2002. Déployable sur hébergement mutualisé OVH (PHP).

## Site OVH - `/app/site-ovh/`
- `header.php` : Navigation desktop + menu mobile JavaScript (onclick toggle)
- `style.css` : Breakpoint mobile/desktop à 1024px, IDs pour la visibilité
- `footer.php` : Pied de page + barre d'appel fixe mobile
- `seo-head.php` : Meta SEO + JSON-LD + favicon
- `contact.php` : Formulaire email PHP
- 5 pages localité + `location-template.php`
- `.htaccess` : HTTPS + URL rewriting + cache

## Complété
- [x] Menu mobile JavaScript (remplace la technique CSS checkbox non fiable)
- [x] Breakpoint 1024px (couvre tablettes)
- [x] Responsive validé (375px, 768px, 1280px)
- [x] Favicon + SEO complet
- [x] Formulaire contact PHP

## Backlog
- P2 : Blog SEO
- P3 : Prise de RDV en ligne
