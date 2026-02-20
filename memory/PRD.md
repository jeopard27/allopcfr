# Allo PC Dépannage - Site Vitrine SEO

## Problem Statement
Site vitrine optimisé SEO pour Allo PC Dépannage, entreprise de dépannage informatique PC et Mac à Paris depuis 2002. Déployable sur hébergement mutualisé OVH (PHP).

## Site OVH - `/app/site-ovh/`
- `header.php` : Navigation desktop + menu mobile JavaScript (onclick toggle)
- `style.css` : Breakpoint mobile/desktop à 1024px, animation PC CSS
- `footer.php` : Pied de page + barre d'appel fixe mobile
- `seo-head.php` : Meta SEO + JSON-LD + favicon
- `contact.php` : Formulaire email PHP
- 5 pages localité + `location-template.php`
- `.htaccess` : HTTPS + URL rewriting + cache

## Complété
- [x] Menu mobile JavaScript (onclick toggle, fiable sur tous appareils)
- [x] Animation PC animé (3 stages : en panne → réparation → réparé)
- [x] Badges flottants animés ("Mac aussi !", "+10 000 clients")
- [x] Breakpoint 1024px (couvre tablettes)
- [x] Responsive validé (375px, 768px, 1280px)
- [x] Favicon + SEO complet

## Backlog
- P2 : Blog SEO
- P3 : Prise de RDV en ligne
