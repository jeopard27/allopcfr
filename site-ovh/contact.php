<?php
$success = false;
$error = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $location = htmlspecialchars(trim($_POST['location'] ?? ''));
    $service = htmlspecialchars(trim($_POST['service'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if ($name && $email && $message) {
        $to = 'contact@allopcdepannage.com';
        $subject = "Nouvelle demande - $service - $name";
        $body = "Nom: $name\nEmail: $email\nTéléphone: $phone\nLocalisation: $location\nService: $service\n\nMessage:\n$message";
        $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

        if (mail($to, $subject, $body, $headers)) {
            $success = true;
        } else {
            $error = true;
        }
    } else {
        $error = true;
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <?php include 'seo-head.php'; ?>
  <title>Contact | Allo PC Dépannage - Dépannage Informatique Paris</title>
  <meta name="description" content="Contactez Allo PC Dépannage pour un dépannage informatique PC ou Mac à Paris. Téléphone, email, WhatsApp. Intervention rapide 7j/7. 01 40 88 30 30">
  <meta name="keywords" content="contact dépannage informatique Paris, devis dépannage PC, devis réparation Mac, technicien informatique Paris, dépannage ordinateur contact">
  <link rel="canonical" href="https://allopcdepannage.fr/contact">
</head>
<body>
<?php include 'header.php'; ?>

<section style="position:relative;padding:4rem 0 5rem">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(0,212,255,.08),transparent 70%)"></div>
  <div class="circuit-bg" style="position:absolute;inset:0;opacity:.5"></div>
  <div class="container" style="position:relative;z-index:10;text-align:center">
    <div class="flex items-center justify-center gap-4" style="margin-bottom:1rem">
      <svg class="i" style="stroke:var(--cyan)"><use href="#ic-monitor"/></svg>
      <svg class="i" style="stroke:rgba(255,255,255,.8)"><use href="#ic-apple"/></svg>
    </div>
    <h1 style="font-weight:900;font-size:2.5rem;margin-bottom:1rem">Contactez<span style="color:var(--cyan)">-nous</span></h1>
    <p style="color:#9ca3af;font-size:1.1rem;max-width:600px;margin:0 auto">Une question ? Besoin d'aide pour votre PC ou Mac ? Notre équipe est à votre disposition</p>
  </div>
</section>

<div class="container" style="padding-bottom:4rem">
      <div style="display:grid;grid-template-columns:1fr;gap:2.5rem" class="contact-layout">
        <div style="display:grid;grid-template-columns:1fr 2fr;gap:2.5rem" class="contact-layout">
        <div>
          <h2 style="font-weight:700;font-size:1.25rem;margin-bottom:1.5rem">Informations</h2>
          <div class="flex flex-col gap-6">
            <div class="flex gap-4"><div class="card flex items-center justify-center" style="width:40px;height:40px;border-radius:8px;flex-shrink:0;background:linear-gradient(135deg,rgba(0,212,255,.3),var(--blue))"><svg class="i" style="stroke:#fff"><use href="#ic-phone"/></svg></div><div><h3 style="font-weight:600;font-size:.95rem">Téléphone</h3><a href="tel:0140883030" style="color:var(--cyan);font-size:1.1rem">01 40 88 30 30</a><p style="font-size:.85rem;color:#6b7280;margin-top:.25rem">Disponible 7j/7</p></div></div>
            <div class="flex gap-4"><div class="card flex items-center justify-center" style="width:40px;height:40px;border-radius:8px;flex-shrink:0;background:linear-gradient(135deg,rgba(245,166,35,.3),var(--blue))"><svg class="i" style="stroke:#fff"><use href="#ic-mail"/></svg></div><div><h3 style="font-weight:600;font-size:.95rem">Email</h3><a href="mailto:contact@allopcdepannage.com" style="color:var(--cyan)">contact@allopcdepannage.com</a></div></div>
            <div class="flex gap-4"><div class="card flex items-center justify-center" style="width:40px;height:40px;border-radius:8px;flex-shrink:0;background:linear-gradient(135deg,var(--blue),var(--dark))"><svg class="i" style="stroke:#fff"><use href="#ic-pin"/></svg></div><div><h3 style="font-weight:600;font-size:.95rem">Adresse</h3><p style="color:#d1d5db">Allo PC Dépannage<br>235 Bld Pereire<br>75017 Paris</p></div></div>
            <div class="flex gap-4"><div class="card flex items-center justify-center" style="width:40px;height:40px;border-radius:8px;flex-shrink:0;background:linear-gradient(135deg,rgba(74,222,128,.3),var(--blue))"><svg class="i" style="stroke:#fff"><use href="#ic-clock"/></svg></div><div><h3 style="font-weight:600;font-size:.95rem">Disponibilité</h3><p style="color:#d1d5db">7 jours sur 7<br>Intervention rapide</p></div></div>
            <div class="flex gap-4"><div class="card flex items-center justify-center" style="width:40px;height:40px;border-radius:8px;flex-shrink:0;background:linear-gradient(135deg,rgba(37,211,102,.3),var(--blue))"><svg class="i" style="stroke:#fff"><use href="#ic-msg"/></svg></div><div><h3 style="font-weight:600;font-size:.95rem">WhatsApp</h3><a href="https://wa.me/33140883030?text=Bonjour, j'ai besoin d'un dépannage informatique." target="_blank" style="color:#25D366;font-size:1.1rem">+33 1 40 88 30 30</a><p style="font-size:.85rem;color:#6b7280;margin-top:.25rem">Réponse rapide</p></div></div>
          </div>
          <div class="card" style="border-radius:12px;padding:1.25rem;margin-top:2rem">
            <h3 style="font-weight:700;color:var(--gold);margin-bottom:.5rem">Urgence PC ou Mac ?</h3>
            <p style="font-size:.85rem;color:#9ca3af;margin-bottom:1rem">Pour une intervention rapide, appelez-nous ou WhatsApp.</p>
            <a href="tel:0140883030" class="btn" style="width:100%;font-size:.9rem;padding:10px 20px;margin-bottom:.75rem"><svg class="i-s"><use href="#ic-phone"/></svg> Appeler maintenant</a>
            <a href="https://wa.me/33140883030" target="_blank" class="btn-green" style="width:100%"><svg class="i-s"><use href="#ic-msg"/></svg> WhatsApp</a>
          </div>
        </div>

        <!-- Form -->
        <div class="card" style="border-radius:12px;padding:2rem">
          <h2 style="font-weight:700;font-size:1.25rem;margin-bottom:.5rem">Envoyez-nous un message</h2>
          <p style="color:#9ca3af;margin-bottom:1.5rem">Décrivez votre problème PC ou Mac et nous vous recontacterons rapidement.</p>

          <?php if($success): ?><div class="alert alert-ok"><svg class="i" style="stroke:currentColor"><use href="#ic-check"/></svg> Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.</div><?php endif; ?>
          <?php if($error): ?><div class="alert alert-err">Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.</div><?php endif; ?>

          <form method="POST" action="contact.php">
            <div class="form-row">
              <div class="form-group"><label for="name">Nom complet *</label><input type="text" id="name" name="name" required class="form-input" placeholder="Jean Dupont"></div>
              <div class="form-group"><label for="email">Email *</label><input type="email" id="email" name="email" required class="form-input" placeholder="jean@exemple.fr"></div>
              <div class="form-group"><label for="phone">Téléphone</label><input type="tel" id="phone" name="phone" class="form-input" placeholder="06 12 34 56 78"></div>
              <div class="form-group"><label for="location">Votre localisation</label><select id="location" name="location" class="form-input"><option value="">Sélectionnez</option><option>Paris 16ème</option><option>Paris 17ème</option><option>Paris 8ème</option><option>Neuilly-sur-Seine</option><option>Levallois-Perret</option><option>Autre</option></select></div>
            </div>
            <div class="form-group"><label for="service">Type de service</label><select id="service" name="service" class="form-input"><option value="">Sélectionnez</option><option>Dépannage PC</option><option>Dépannage Mac</option><option>Suppression virus</option><option>Récupération données</option><option>Installation réseau</option><option>Réparation matériel</option><option>Formation</option><option>Autre</option></select></div>
            <div class="form-group"><label for="message">Décrivez votre problème *</label><textarea id="message" name="message" required rows="5" class="form-input" placeholder="Mon ordinateur (PC ou Mac) ne démarre plus depuis ce matin..."></textarea></div>
            <button type="submit" class="btn" style="font-size:1rem"><svg class="i"><use href="#ic-send"/></svg> Envoyer</button>
          </form>
        </div>
      </div>
    </div>

<?php include 'footer.php'; ?>
</body>
</html>
