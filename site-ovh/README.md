# Allo PC Dépannage - Site PHP pour OVH

## Déploiement sur OVH

Uploadez **TOUT** le contenu de ce dossier à la racine de votre hébergement OVH (dossier `www/`).

### Structure des fichiers :
```
www/
├── .htaccess                                    ← Réécriture URL + HTTPS + cache + sécurité
├── index.php                                    ← Page d'accueil
├── contact.php                                  ← Page contact (formulaire + envoi email)
├── depannage-pc-paris-16.php                    ← Paris 16ème
├── depannage-pc-paris-17.php                    ← Paris 17ème
├── depannage-pc-paris-8.php                     ← Paris 8ème
├── depannage-pc-neuilly-sur-seine.php           ← Neuilly-sur-Seine
├── depannage-informatique-levallois-perret.php  ← Levallois-Perret
├── header.php                                   ← En-tête + navigation (include)
├── footer.php                                   ← Pied de page (include)
├── seo-head.php                                 ← Balises SEO / Schema.org (include)
├── location-template.php                        ← Template des pages localité
├── style.css                                    ← Feuille de styles unique
├── banner-hero.png                              ← Image du bandeau principal
└── favicon.png                                  ← Icône de l'onglet navigateur
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
Le formulaire envoie un email à `contact@allopcdepannage.com` via la fonction PHP `mail()`.
Sur OVH mutualisé, cela fonctionne nativement sans configuration supplémentaire.

## SEO inclus
- Meta tags (title, description, keywords) sur chaque page
- Schema.org JSON-LD (LocalBusiness) sur chaque page
- Open Graph pour le partage social
- URLs propres via .htaccess (suppression du .php)
- Redirect HTTPS automatique
- Balises canonical
- Favicon

## Menu mobile
Le menu mobile utilise une technique CSS pure (checkbox toggle) sans JavaScript.
Cliquez sur l'icône ☰ pour ouvrir/fermer le menu de navigation.
