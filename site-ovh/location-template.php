<?php
// Usage: include this with $loc array defined
// $loc = ['name'=>'...', 'code'=>'...', 'title'=>'...', 'desc'=>'...', 'meta'=>'...', 'h1'=>'...', 'neighborhoods'=>[...], 'seo_text'=>'...', 'featured'=>false]
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <?php include 'seo-head.php'; ?>
  <title><?php echo $loc['title']; ?></title>
  <meta name="description" content="<?php echo $loc['meta']; ?>">
  <meta name="keywords" content="dépannage informatique <?php echo $loc['name']; ?>, dépannage PC <?php echo $loc['name']; ?>, dépannage Mac <?php echo $loc['name']; ?>, réparation ordinateur <?php echo $loc['name']; ?>, technicien informatique <?php echo $loc['name']; ?>, dépannage ordinateur <?php echo $loc['name']; ?>">
  <link rel="canonical" href="https://allopcdepannage.fr/<?php echo $loc['slug']; ?>">
</head>
<body>
<?php include 'header.php'; ?>

<section class="loc-hero" style="position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(0,212,255,.08),transparent 70%)"></div>
  <div class="circuit-bg" style="position:absolute;inset:0;opacity:.3"></div>
  <div class="container" style="position:relative;z-index:10">
    <nav class="breadcrumb"><a href="index.php">Accueil</a> <span style="color:#4b5563">/</span> <span style="color:var(--cyan);font-weight:500"><?php echo $loc['name']; ?></span></nav>
    <div class="badge badge-g glow loc-badge" style="margin-bottom:1.5rem"><span style="width:8px;height:8px;background:var(--gold);border-radius:50%"></span> Zone : <?php echo $loc['name']; ?> (<?php echo $loc['code']; ?>)</div>
    <h1 style="font-weight:900;font-size:2.5rem;line-height:1.2;margin-bottom:1.5rem"><?php echo $loc['h1']; ?></h1>
    <p style="color:#d1d5db;font-size:1.1rem;max-width:800px;line-height:1.7;margin-bottom:1.5rem"><?php echo $loc['desc']; ?></p>
    <div class="card flex items-center gap-4" style="display:inline-flex;padding:1rem;border-radius:12px;margin-bottom:2rem">
      <span class="flex items-center gap-2"><svg class="i" style="stroke:var(--cyan)"><use href="#ic-monitor"/></svg> <strong>PC Windows</strong></span>
      <span style="color:var(--gold);font-size:1.3rem">+</span>
      <span class="flex items-center gap-2"><svg class="i" style="stroke:#fff"><use href="#ic-apple"/></svg> <strong>Mac Apple</strong></span>
    </div>
    <div class="trust" style="margin-bottom:2rem">
      <span class="trust-b card"><svg class="i-s" style="stroke:var(--gold)"><use href="#ic-clock"/></svg> Intervention rapide</span>
      <span class="trust-b card"><svg class="i-s" style="stroke:#4ade80"><use href="#ic-check"/></svg> 7j/7</span>
      <?php if(!empty($loc['featured'])): ?><span class="trust-b card glow"><svg class="i-s" style="stroke:var(--gold)"><use href="#ic-pin"/></svg> Notre siège social</span><?php endif; ?>
    </div>
    <a href="tel:0140883030" class="btn" style="font-size:1.1rem"><svg class="i"><use href="#ic-phone"/></svg> 01 40 88 30 30</a>
  </div>
</section>

<section style="padding:3rem 0;border-top:1px solid rgba(0,212,255,.1)">
  <div class="container">
    <h2 style="font-weight:700;font-size:1.5rem;margin-bottom:1.5rem">Quartiers desservis à <?php echo $loc['name']; ?></h2>
    <div class="flex flex-wrap gap-3"><?php foreach($loc['neighborhoods'] as $n): ?><span class="nbh card"><svg class="i-s" style="stroke:var(--gold)"><use href="#ic-pin"/></svg> <?php echo $n; ?></span><?php endforeach; ?></div>
  </div>
</section>

<section style="padding:3rem 0">
  <div class="container">
    <h2 style="font-weight:700;font-size:1.5rem;margin-bottom:1.5rem">Nos services PC et Mac à <?php echo $loc['name']; ?></h2>
    <div class="grid g4">
      <div class="card svc"><div class="svc-i def"><svg class="i" style="stroke:var(--cyan)"><use href="#ic-zap"/></svg></div><h3 style="font-size:1rem">Dépannage Urgent</h3><p style="font-size:.85rem">Intervention &lt; 30 min</p></div>
      <div class="card svc"><div class="svc-i def"><svg class="i" style="stroke:var(--cyan)"><use href="#ic-shield"/></svg></div><h3 style="font-size:1rem">Virus & Sécurité</h3><p style="font-size:.85rem">PC et Mac</p></div>
      <div class="card svc"><div class="svc-i def"><svg class="i" style="stroke:var(--cyan)"><use href="#ic-hdd"/></svg></div><h3 style="font-size:1rem">Récupération Données</h3><p style="font-size:.85rem">Tous supports</p></div>
      <div class="card svc"><div class="svc-i def"><svg class="i" style="stroke:var(--cyan)"><use href="#ic-wifi"/></svg></div><h3 style="font-size:1rem">Réseau WiFi</h3><p style="font-size:.85rem">Installation & config</p></div>
    </div>
  </div>
</section>

<section style="padding:3rem 0;border-top:1px solid rgba(0,212,255,.1)">
  <div class="container" style="max-width:900px">
    <h2 style="font-weight:700;font-size:1.5rem;margin-bottom:1.5rem">Votre expert en dépannage informatique PC et Mac à <?php echo $loc['name']; ?></h2>
    <div style="color:#9ca3af;line-height:1.7">
      <p style="margin-bottom:1rem"><strong style="color:#fff">Allo PC Dépannage</strong> intervient à <?php echo $loc['name']; ?> (<?php echo $loc['code']; ?>) depuis 2002. Notre équipe de techniciens qualifiés se déplace à votre domicile ou sur votre lieu de travail pour résoudre tous vos problèmes informatiques sur <strong style="color:var(--cyan)">PC Windows et Mac Apple</strong>.</p>
      <p style="margin-bottom:1rem">Que vous ayez un <strong style="color:#fff">ordinateur qui ne démarre plus</strong>, une <strong style="color:#fff">infection virale</strong>, une <strong style="color:#fff">perte de données</strong> ou besoin d'installer un <strong style="color:#fff">réseau WiFi</strong>, nous avons la solution pour votre PC comme pour votre Mac.</p>
      <p style="margin-bottom:1rem">Nous intervenons sur tous les modèles : <strong style="color:#fff">iMac, MacBook, MacBook Pro, MacBook Air, Mac Mini</strong>, ainsi que tous les <strong style="color:#fff">PC fixes et portables</strong> de toutes marques (HP, Dell, Lenovo, Asus, Acer...).</p>
      <p>Nos forfaits incluent une <strong style="color:var(--gold)">obligation de résultat</strong> : vous ne payez que si le problème est résolu. C'est notre engagement qualité depuis plus de 20 ans auprès des habitants de <?php echo $loc['name']; ?>.</p>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section cta-border circuit-bg" style="background:var(--dark);overflow:hidden">
  <div style="position:absolute;inset:0;background:linear-gradient(to right,var(--blue),rgba(0,212,255,.2),var(--blue))"></div>
  <div class="container" style="position:relative;z-index:10;text-align:center;max-width:800px">
    <h2 style="font-weight:900;font-size:2rem;margin-bottom:1.5rem">Un problème avec votre <span style="color:var(--cyan)">PC</span> ou <span>Mac</span> à <?php echo $loc['name']; ?> ?</h2>
    <p style="font-size:1.1rem;color:#d1d5db;margin-bottom:2rem;line-height:1.7">Appelez-nous maintenant et un technicien informatique intervient chez vous en moins de 30 minutes.</p>
    <a href="tel:0140883030" class="btn" style="font-size:1.2rem;padding:16px 40px"><svg class="i-l"><use href="#ic-phone"/></svg> 01 40 88 30 30</a>
    <p style="margin-top:1.5rem;font-size:.9rem;color:#6b7280">Diagnostic gratuit · Intervention 7j/7 · Obligation de résultat</p>
  </div>
</section>

<?php include 'footer.php'; ?>
</body>
</html>
