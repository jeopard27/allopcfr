# Allo PC Dépannage - Site PHP pour OVH

## Fichiers à uploader sur OVH

Uploadez TOUT le contenu du dossier `site-ovh/` à la racine de votre hébergement OVH (dossier `www/`).

### Structure :
```
www/
├── .htaccess              ← Réécriture URL + cache + sécurité
├── index.php              ← Page d'accueil
├── contact.php            ← Page contact (formulaire PHP avec envoi email)
├── depannage-pc-paris-16.php
├── depannage-pc-paris-17.php
├── depannage-pc-paris-8.php
├── depannage-pc-neuilly-sur-seine.php
├── depannage-informatique-levallois-perret.php
├── header.php             ← En-tête partagé (navigation)
├── footer.php             ← Pied de page partagé
├── seo-head.php           ← Balises SEO/Schema.org partagées
├── location-template.php  ← Template des pages localité
├── style.css              ← Feuille de styles
└── banner-hero.png        ← Image du bandeau
```

## URLs du site (avec .htaccess)
- `allopcdepannage.fr/` → Accueil
- `allopcdepannage.fr/contact` → Contact
- `allopcdepannage.fr/depannage-pc-paris-16` → Paris 16
- `allopcdepannage.fr/depannage-pc-paris-17` → Paris 17
- `allopcdepannage.fr/depannage-pc-paris-8` → Paris 8
- `allopcdepannage.fr/depannage-pc-neuilly-sur-seine` → Neuilly
- `allopcdepannage.fr/depannage-informatique-levallois-perret` → Levallois

## Formulaire de contact
Le formulaire envoie un email à `contact@allopcdepannage.com` via la fonction `mail()` de PHP.
Sur OVH mutualisé, ça fonctionne nativement.

## SEO inclus
- Meta tags (title, description, keywords) sur chaque page
- Schema.org JSON-LD (LocalBusiness) sur chaque page
- Open Graph pour le partage social
- URLs propres via .htaccess
- Balises canonical
