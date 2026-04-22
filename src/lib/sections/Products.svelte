<script>
  import { base } from '$app/paths';
  let showModules = $state(false);
  let selectedModule = $state(null);

  const moduleCategories = [
    {
      label: '📡 Échanges & EDI',
      modules: [
        { title: 'EDI', desc: 'Normes INOVERT, CalvaEdi, Ftp, Extranet', logos: [{ src: 'calva-logo.jpg', link: 'https://www.calvaedi.com/', alt: 'CalvaEdi' }], features: ['Norme INOVERT / Normes spécifiques / Paramétrable', 'Echanges CalvaEdi, Ftp, Réseau, Extranet', 'Réception et Intégration des OT du donneur d\'ordre', 'Emission des OT vers sous-traitant', 'Retour d\'information (sous-traitant, donneur d\'ordre, Emargés)'] },
        { title: 'Extranet', desc: 'Portail Web clients', logos: [], features: ['Consultation des remises, Retour d\'information, Historique', 'Recherche multicritère, filtres cumulatifs', 'Visualisation et téléchargement récépissés émargés', 'Litiges, anomalies, incidents, photos, Messagerie'] },
        { title: 'Chargeur', desc: 'Saisie OT en ligne par vos clients', logos: [], features: ['Portail web pour vos clients', 'Saisie des OT / Impression des étiquettes', 'Emission des OT (EDI), bordereau pdf', 'Intégration du retour d\'informations / Récépissés émargés', 'Infos Facturation, facture Pdf, Historique'] },
        { title: 'Dépose B2PWEB', desc: 'Bourse de fret', logos: [{ src: 'b2pweb-logo.png', link: 'https://www.b2pweb.com/fr/', alt: 'B2PWeb' }], features: ['Dépose sur Bourse de Fret via API "Post"', 'Service de Dépose d\'offres B2PWeb', 'Création, Modification, Rafraichissement et Suppression des offres'] },
        { title: 'Chorus Pro', desc: 'Facturation électronique B2G', logos: [], features: ['Dépose des factures numériques sur le portail Chorus Pro', 'Gestion émises/à émettre, Filtres multicritères', 'Sélection des factures, Fichiers joints', 'Cycle de vie des factures'] },
        { title: 'Factur-X', desc: 'Déjà prêt pour la facturation électronique', logos: [], features: ['Facturation électronique B2B', 'Emission des factures au format Factur-x vers la plateforme agréée de votre choix'] },
      ]
    },
    {
      label: '📱 Mobilité & Traçabilité',
      modules: [
        { title: 'Route Mobile', desc: 'Suivi tournées chauffeurs', logos: [{ src: 'android-logo.png', alt: 'Android' }], features: ['Suivi de la Tournée du chauffeur (Cheminement ou Planning journalier)', 'Gestion des étapes (Statuts, Anomalies, Photos, Signature)', 'Accès sécurisé et Paramétrages visuels', 'Mise à jour automatique des données', 'Suivi Gps sur carte Google / Historique des itinéraires'] },
        { title: 'Flashage', desc: 'Validation colis sur quai', logos: [{ src: 'android-logo.png', alt: 'Android' }], features: ['Application Mobile de quai de Flashage (androïd)', 'Arrivage et départ de colis', 'Gestion des emplacements', 'Mise à jour en temps réel des informations (wi-fi)'] },
        { title: 'Géo-localisation', desc: 'Suivi GPS temps réel', logos: [{ src: 'gedmouv-logo.jpg', link: 'https://www.gedmouv.com/solution', alt: 'Gedmouv' }, { src: 'trimble-logo.jpg', link: 'https://www.trimbletl.com/fr/track-and-trace/', alt: 'Trimble' }, { src: 'zf-logo.svg', link: 'https://www.zf.com/products/fr/cv/products_68352.html', alt: 'ZF' }], features: ['Interfaces avec différents systèmes embarqués', 'Envoi des OT, réception du retour d\'informations', 'Suivi Gps sur carte Google', 'Historique des itinéraires'] },
        { title: 'Rdv SMS/Web', desc: 'Prise de rendez-vous par SMS', logos: [], features: ['Emission SMS (via SmsMode) avec Url portail Web', 'Gestion du rendez-vous sur le portail Web', 'Propositions multiples / Choix du rendez-vous', 'Possibilités d\'accès (véhicule) / Précisions', 'Emission des informations vers l\'exploitation'] },
      ]
    },
    {
      label: '📦 Gestion & Logistique',
      modules: [
        { title: 'Plannings', desc: 'Transport, Social, Parc...', logos: [], features: ['Nombreuses présentations et fonctionnalités', 'Puits hiérarchiques, bulles ...', 'Horaire, journalier, hebdomadaire, mensuel, jour/nuit ...', 'Transport, Social, Parc ...', 'Impressions documents, récapitulatifs'] },
        { title: 'GEID', desc: 'Numérisation & OCR des récépissés', logos: [], features: ['Numérisation des Récépissés émargés', 'Reconnaissance OCR (paramétrable par client)', 'Automatique : QR Code, Code_barres', 'Stockage des fichiers dans dossier OT'] },
        { title: 'Consignations', desc: 'Mouvements, restitutions, stats', logos: [], features: ['Mouvements de clients, tiers et sous-traitants', 'Restitutions, compensations, régularisations', 'Relevé détaillé par client/sous-traitant', 'Facturation, taxation automatique', 'Statistiques crédit-débit par tiers/article'] },
        { title: 'Parc', desc: 'Véhicules, chauffeurs, carburants', logos: [], features: ['Paramétrage interventions périodiques (date/km/heure)', 'Alertes automatiques', 'Gestion carburants (manuelle, cuve, autoroutes, adblue...)', 'Visites médicales, FCOS...', 'Pièces détachées, sortie de Stock', 'Consommation multi-carburant, Coût kilométrique'] },
        { title: 'Stock', desc: 'FIFO, inventaires, tarification', logos: [], features: ['Entrées/Sorties en FIFO, libre', 'Intégration paramétrable fichier d\'entrées', 'Inventaires/Soldes par Clients/Familles/Références', 'Tarification auto à la référence/article/famille', 'Facturation par référence, stock résiduel, pic de stockage', 'Statistiques C.A., quantités, rubriques taxation'] },
        { title: 'Stock Mobile', desc: 'Flashez les Colis en Wi-fi', logos: [{ src: 'android-logo.png', alt: 'Android' }], features: ['Accès direct à la Base de données en Wi-fi', 'Gestion des commandes', 'Saisie entrée, Validation, Mise en emplacement', 'Recherche de colis, Détail, Liste par emplacement', 'Sortie de colis, Gestion des bordereaux'] },
      ]
    }
  ];

  function openModuleModal(mod) {
    selectedModule = mod;
    document.body.style.overflow = 'hidden';
  }

  function closeModuleModal() {
    selectedModule = null;
    document.body.style.overflow = '';
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      if (selectedModule) closeModuleModal();
    }
  }
</script>


<section id="products" class="section">
  <div class="container">
    <h2 class="section-title">Choisissez la solution adaptée à votre activité</h2>
    <p class="section-intro">3 versions pour couvrir tous vos besoins, de la facturation à la gestion complète.</p>

    <div class="pricing-grid">

      <!-- BASIC -->
      <div class="pricing-card">
        <div class="card-header">
          <span class="model-tag">FT5G</span>
          <h3>Basic</h3>
          <p class="card-desc">Facturation Transport : l'essentiel pour démarrer</p>
        </div>
        <div class="card-body">
          <ul class="features">
            <li>Affrètements (saisie, taxation auto, confirmation)</li>
            <li>Transports (récépissés, étiquettes, incidents)</li>
            <li>Opérations diverses</li>
            <li>Facturation</li>
            <li>Validation achats</li>
            <li>Interface comptable</li>
            <li>Statistiques</li>
          </ul>
        </div>
        <div class="card-footer">
          <a href="#contact" class="cta-btn">Demander un devis</a>
        </div>
      </div>

      <!-- ESSENTIEL -->
      <div class="pricing-card featured">
        <div class="badge">Le + populaire</div>
        <div class="card-header">
          <span class="model-tag">TP5G</span>
          <h3>Essentiel</h3>
          <p class="card-desc">Exploitation complète pour les professionnels du transport</p>
        </div>
        <div class="card-body">
          <p class="includes">Tout ce qu'offre <strong>Basic</strong>, plus :</p>
          <ul class="features">
            <li>Lettres de voiture, Rdv intégrés</li>
            <li>Location de véhicule avec chauffeur</li>
            <li>Rapports d'arrivage</li>
            <li>Gestion chargement (véhicule, chauffeur, Google API)</li>
            <li>SAV complet (souffrances, re-livraisons, litiges)</li>
            <li>Facturation avancée (dématérialisation, relances auto)</li>
            <li>Virements SEPA</li>
            <li>Statistiques périodiques (CA, marge, géo)</li>
          </ul>
        </div>
        <div class="card-footer">
          <a href="#contact" class="cta-btn cta-featured">Demander un devis</a>
        </div>
      </div>

      <!-- EXPERT -->
      <div class="pricing-card">
        <div class="card-header">
          <span class="model-tag">XT5G</span>
          <h3>Expert</h3>
          <p class="card-desc">Puissance maximale, sans compromis</p>
        </div>
        <div class="card-body">
          <p class="includes">Tout ce qu'offre <strong>Essentiel</strong>, plus :</p>
          <ul class="features">
            <li>Multi-modal (Citerne, Maritime, Conteneur...)</li>
            <li>Points / véhicules / articles illimités</li>
            <li>Module Intégration Coûts, devis, pro forma</li>
            <li>Location avancée (taxe essieu, kms inclus/supp.)</li>
            <li>Envoi mail auto (contrats, certificats, factures)</li>
            <li>Plannings jour/nuit, horaire (1/4h)</li>
            <li>Statistiques avancées & tableau de bord</li>
            <li>Gestion Établissements secondaires</li>
          </ul>
        </div>
        <div class="card-footer">
          <a href="#contact" class="cta-btn">Demander un devis</a>
        </div>
      </div>
    </div>

    <!-- Modules -->
    <div class="modules-section">
      <div class="modules-header">
        <h3 class="modules-title">Complétez avec nos modules experts</h3>
        <p class="modules-intro">16 modules pour personnaliser votre solution selon vos besoins métier.</p>
        <button class="toggle-btn" onclick={() => showModules = !showModules}>
          {showModules ? 'Masquer les modules' : 'Voir tous les modules'}
          <span class="chevron" style="transform: rotate({showModules ? '180deg' : '0deg'})">▼</span>
        </button>
      </div>

      {#if showModules}
        <div class="modules-content">
          {#each moduleCategories as cat (cat.label)}
            <div class="module-category">
              <h4 class="cat-label">{cat.label}</h4>
              <div class="modules-grid">
                {#each cat.modules as mod (mod.title)}
                  <button class="module-card" onclick={() => openModuleModal(mod)}>
                    <h5>{mod.title}</h5>
                    <p>{mod.desc}</p>
                    <span class="module-link">Détails →</span>
                  </button>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Module Modal -->
    {#if selectedModule}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_interactive_supports_focus -->
      <div class="modal-overlay" onclick={closeModuleModal} onkeydown={handleKeydown} role="dialog" aria-modal="true">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="modal-content" onclick={(e) => e.stopPropagation()}>
          <button class="close-btn" onclick={closeModuleModal}>&times;</button>
          <div class="modal-header">
            <h3>{selectedModule.title}</h3>
            <span class="modal-subtitle">{selectedModule.desc}</span>
          </div>
          <ul class="modal-features">
            {#each selectedModule.features as feature, i (i)}
              <li>{feature}</li>
            {/each}
          </ul>
          {#if selectedModule.logos?.length}
            <div class="modal-logos">
              {#each selectedModule.logos as logo (logo.src)}
                {#if logo.link}

                  <a href={logo.link} target="_blank" rel="external noopener noreferrer" class="logo-link">
                    <img src="{base}/images/{logo.src}" alt={logo.alt} class="modal-logo-img">
                  </a>
                {:else}
                  <img src="{base}/images/{logo.src}" alt={logo.alt} class="modal-logo-img">
                {/if}
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/if}

  </div>
</section>

<style>
  .section {
    background: var(--bg-light);
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: start;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }

  .pricing-card {
    background: white;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .pricing-card:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
  }

  .pricing-card.featured {
    border: 2px solid var(--primary);
    box-shadow: 0 10px 40px rgba(0, 148, 216, 0.15);
    transform: scale(1.04);
    z-index: 1;
  }

  .pricing-card.featured:hover {
    transform: scale(1.04) translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 148, 216, 0.2);
  }

  .badge {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: var(--primary);
    color: white;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .card-header {
    padding: 2.5rem 2rem 1.5rem;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
  }

  .featured .card-header {
    padding-top: 3.5rem;
  }

  .model-tag {
    display: inline-block;
    background: var(--bg-light);
    color: var(--primary);
    padding: 0.25rem 0.85rem;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .card-header h3 {
    font-size: 2rem;
    color: var(--text-main);
    margin-bottom: 0.5rem;
  }

  .card-desc {
    font-size: 0.9rem;
    color: var(--text-light);
    line-height: 1.4;
    margin: 0;
  }

  .card-body {
    padding: 2rem;
    flex-grow: 1;
  }

  .includes {
    font-size: 0.9rem;
    color: var(--primary-dark);
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px dashed #e5e7eb;
  }

  .features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.75rem;
  }

  .features li {
    padding-left: 1.5rem;
    position: relative;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-main);
  }

  .features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
  }

  .card-footer {
    padding: 1.5rem 2rem 2rem;
  }

  .cta-btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.9rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    border: 2px solid var(--primary);
    color: var(--primary);
    background: transparent;
  }

  .cta-btn:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 148, 216, 0.3);
  }

  .cta-featured {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .cta-featured:hover {
    background: var(--primary-dark);
    border-color: var(--primary-dark);
  }

  /* Modules */
  .modules-section {
    margin-top: 5rem;
    background: white;
    padding: 3.5rem;
    border-radius: 20px;
    border: 1px solid #e5e7eb;
    overflow: hidden;
  }

  .modules-header {
    text-align: center;
  }

  .modules-title {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: var(--text-main);
  }

  .modules-intro {
    color: var(--text-light);
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .toggle-btn {
    background: var(--secondary);
    color: #1a1a1a;
    border: none;
    padding: 0.85rem 2rem;
    border-radius: 50px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
    box-shadow: 0 3px 10px rgba(252, 203, 14, 0.25);
  }

  .toggle-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(252, 203, 14, 0.4);
    background: #f0c000;
  }

  .chevron {
    font-size: 0.75rem;
    transition: transform 0.3s ease;
  }

  .modules-content {
    margin-top: 3rem;
    display: grid;
    gap: 2.5rem;
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .cat-label {
    font-size: 1.1rem;
    color: var(--text-main);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--bg-light);
  }

  .modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    gap: 1rem;
  }

  .module-card {
    background: var(--bg-light);
    border: 1px solid transparent;
    padding: 1.25rem;
    border-radius: 10px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .module-card:hover {
    background: white;
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transform: translateY(-2px);
  }

  .module-card h5 {
    font-size: 1rem;
    color: var(--text-main);
    margin: 0 0 0.4rem;
  }

  .module-card p {
    font-size: 0.8rem;
    color: var(--text-light);
    line-height: 1.4;
    margin: 0 0 1rem;
    flex-grow: 1;
  }

  .module-link {
    font-size: 0.8rem;
    color: var(--primary);
    font-weight: 700;
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    padding: 1rem;
  }

  .modal-content {
    background: white;
    width: 100%;
    max-width: 550px;
    max-height: 85vh;
    border-radius: 16px;
    position: relative;
    padding: 2.5rem;
    overflow-y: auto;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--text-light);
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
  }

  .close-btn:hover { color: var(--primary); }

  .modal-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }

  .modal-header h3 {
    font-size: 1.5rem;
    color: var(--text-main);
    margin-bottom: 0.25rem;
  }

  .modal-subtitle {
    color: var(--text-light);
    font-size: 0.9rem;
  }

  .modal-features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;
    display: grid;
    gap: 0.75rem;
  }

  .modal-features li {
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.5;
    color: var(--text-main);
    font-size: 0.95rem;
  }

  .modal-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
  }

  .modal-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1.25rem;
    background: var(--bg-light);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  }

  .modal-logo-img {
    max-height: 45px;
    max-width: 130px;
    object-fit: contain;
    opacity: 0.75;
    transition: opacity 0.3s, transform 0.3s;
  }

  .logo-link:hover .modal-logo-img {
    opacity: 1;
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 450px;
    }
    .pricing-card.featured {
      transform: none;
      order: -1;
    }
    .pricing-card.featured:hover {
      transform: translateY(-4px);
    }
    .modules-section {
      padding: 2.5rem 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .modules-section { padding: 1.5rem 1rem; }
    .modal-content { padding: 2rem 1.25rem; }
    .modules-grid { grid-template-columns: 1fr 1fr; }
    .modules-title { font-size: 1.35rem; }
    .toggle-btn { padding: 0.75rem 1.5rem; font-size: 0.9rem; }
  }

  @media (max-width: 400px) {
    .modules-grid { grid-template-columns: 1fr; }
    .pricing-grid { max-width: 100%; }
    .card-header { padding: 2rem 1.25rem 1.25rem; }
    .card-body { padding: 1.25rem; }
    .card-footer { padding: 1rem 1.25rem 1.5rem; }
  }
</style>

