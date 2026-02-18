<script>
  import { base } from '$app/paths';
  let selectedItem = $state(null);
  let showModules = $state(false);

  let products = [
    {
      type: 'product',
      id: "basic",
      title: "Basic",
      model: "FT5G",
      description: "Le TMS Facturation Transport d'une efficacité redoutable !",
      icon: "🔹",
      features: [
        "Affrètements (saisie, taxation automatique, émission confirmation...)",
        "Transports (saisie, taxation automatique, impression récépissés, étiquettes, incidents...)",
        "Opérations diverses",
        "Facturation",
        "Validation achats",
        "Interface comptable",
        "Statistiques"
      ]
    },
    {
      type: 'product',
      id: "essentiel",
      title: "Essentiel",
      model: "TP5G",
      description: "Son ergonomie vous permet de gérer vos transports dans la plus grande simplicité.",
      icon: "💎",
      features: [
        "Affrètements (saisie, taxation automatique, émission confirmation...)",
        "Transports (saisie, taxation automatique, impression récépissés et lettres de voiture, étiquettes, Rdv, incidents...)",
        "Location de véhicule avec chauffeur",
        "Opérations diverses",
        "Rapports d'arrivage",
        "Gestion chargement (par véhicule, chauffeur, ligne, Optimisation Google API, plan/liste de chargement, bordereaux)",
        "SAV (bordereau retour chauffeur, souffrances, re-livraisons, retours, incidents, litiges)",
        "Facturation (port payé, port du, avoirs, dématérialisation - envoi mail, relevés, encaissements, relances semi-automatiques)",
        "Validation achats, virements SEPA",
        "Interface comptable",
        "Statistiques périodiques (CA, achat, marge, quantités, unités, géographiques, codes UN)"
      ]
    },
    {
      type: 'product',
      id: "expert",
      title: "Expert",
      model: "XT5G",
      description: 'TP5G boosté : Toute la puissance des outils "Expert" dans une application dotée de la convivialité du standard TP5G.',
      icon: "🚀",
      features: [
        "Affrètements (demande prix, confirmation...)",
        "Transports (Module Intégration Coûts, taxation automatique, devis, pro forma, déclaration assurance...)",
        "Multi-modal : Citerne, Exceptionnel, Maritime-Aérien, Conteneur ...",
        "Points/véhicules/Transporteurs/articles/options illimités",
        "Location de véhicule (tarifs, assurance, taxe à l'essieu, périodicité facturation, kms inclus/supp. ...)",
        "Envoi mail (contrat, certificats, prise en charge et restitution, conditions générales, attestations, facture)",
        "Plannings jour/nuit, horaire (1/4 heure)...",
        "Statistiques (exploitants, points de tournée, source clients, tableau de bord CA/activité)",
        "Gestion des Etablissements secondaires, des Interlocuteurs, des Cadeaux..."
      ]
    }
  ];

  let modules = [
    {
      type: 'module',
      id: 'edi',
      title: 'EDI',
      subtitle: 'Echangez les données avec les différents acteurs logistiques',
      icon: '🔄',
      features: [
        'Norme INOVERT / Normes spécifiques / Paramétrable',
        'Echanges CalvaEdi, Ftp, Réseau, Extranet',
        'Réception et Intégration des OT du donneur d\'ordre',
        'Emission des OT vers sous-traitant',
        'Retour d\'information (Intégration de sous-traitant, Emission vers donneur d\'ordre, Emargés)'
      ],
      logos: [
        { src: 'calva-logo.jpg', link: 'https://www.calvaedi.com/', alt: 'CalvaEdi' }
      ]
    },
    {
      type: 'module',
      id: 'flashage',
      title: 'Flashage',
      subtitle: 'Validez le déplacement d\'un colis en direct !',
      icon: '📱',
      features: [
        'Application Mobile de quai de Flashage (androïd)',
        'Arrivage et départ de colis',
        'Gestion des emplacements',
        'Mise à jour en temps réel des informations (wi-fi)'
      ],
      logos: [
        { src: 'android-logo.png', alt: 'Android' }
      ]
    },
    {
      type: 'module',
      id: 'plannings',
      title: 'Plannings',
      subtitle: 'Planifiez vos transports !',
      icon: '📅',
      features: [
        'Nombreuses présentations et fonctionnalités',
        'Puits hiérarchiques, bulles ...',
        'Horaire, journalier, hebdomadaire, mensuel, jour/nuit ...',
        'Transport, Social, Parc ...',
        'Impressions documents, récapitulatifs'
      ]
    },
    {
      type: 'module',
      id: 'rdv',
      title: 'Rdv (sms/web)',
      subtitle: 'Communiquez par SMS',
      icon: '💬',
      features: [
        'Emission SMS (via SmsMode) avec Url pour accès rendez-vous sur le portail Web',
        'Gestion du rendez-vous sur le portail Web',
        '- Propositions multiples de rendez-vous',
        '- Choix du rendez-vous / Proposition dates',
        '- Possibilités d\'accès (véhicule) / Précisions, observations',
        'Emission des informations vers l\'exploitation'
      ]
    },
    {
      type: 'module',
      id: 'route-mobile',
      title: 'Route Mobile',
      subtitle: 'Traçabilité Mobile : Suivez les transports en direct',
      icon: '🚚',
      features: [
        'Suivi de la Tournée du chauffeur (Mode "Cheminement" ou Planning journalier)',
        'Gestion des étapes (Statuts, Anomalies, Photos, Signature)',
        'Accès sécurisé et Paramétrages visuels',
        'Mise à jour automatique des données (Réception OT, Retour d\'information)',
        'Suivi Gps sur carte Google / Historique des itinéraires'
      ],
      logos: [
        { src: 'android-logo.png', alt: 'Android' }
      ]
    },
    {
      type: 'module',
      id: 'geoloc',
      title: 'Géo-localisation',
      subtitle: 'Suivez, soyez informés !',
      icon: '📍',
      features: [
        'Interfaces avec différents systèmes embarqués',
        'Envoi des OT, réception du retour d\'informations',
        'Suivi Gps sur carte Google',
        'Historique des itinéraires'
      ],
      logos: [
        { src: 'gedmouv-logo.jpg', link: 'https://www.gedmouv.com/solution', alt: 'Gedmouv' },
        { src: 'trimble-logo.jpg', link: 'https://www.trimbletl.com/fr/track-and-trace/', alt: 'Trimble' },
        { src: 'zf-logo.svg', link: 'https://www.zf.com/products/fr/cv/products_68352.html', alt: 'ZF' }
      ]
    },
    {
      type: 'module',
      id: 'geid',
      title: 'GEID',
      subtitle: 'Numérisez vos documents !',
      icon: '📂',
      features: [
        'Numérisation des Récépissés émargés',
        'Reconnaissance OCR (paramétrable par client)',
        'Automatique : QR Code, Code_barres',
        'Stockage des fichiers dans dossier OT pour Visualisation, émission EDI/Facture'
      ]
    },
    {
      type: 'module',
      id: 'consignations',
      title: 'Consignations',
      subtitle: 'Gestion intégrée à l\'Exploitation !',
      icon: '📦',
      features: [
        'Mouvements de clients, tiers et sous-traitants',
        'Restitutions, compensations, régularisations',
        'Relevé détaillé par client/sous-traitant, tiers, consignations',
        'Facturation, taxation automatique',
        'Statistiques crédit-débit par tiers/article'
      ]
    },
    {
      type: 'module',
      id: 'parc',
      title: 'Parc',
      subtitle: 'Suivi des véhicules & chauffeurs',
      icon: '🚛',
      features: [
        'Paramétrage interventions périodiques (date/kilométrage/heure)',
        'Alertes automatiques',
        'Gestion carburants (manuelle, cuve/pétrolier, autoroutes, adblue...)',
        'Visites médicales, FCOS...',
        'Pièces détachées, sortie de Stock',
        'Consommation multi-carburant, Coût kilométrique'
      ]
    },
    {
      type: 'module',
      id: 'stock',
      title: 'Stock',
      subtitle: 'Suivez vos références en FIFO ...',
      icon: '🏭',
      features: [
        'Entrées/Sorties en FIFO, libre',
        'Intégration paramétrable fichier d\'entrées',
        'Inventaires/Soldes détaillés par Clients/Familles/Références',
        'Tarification automatique à la référence/article/famille',
        'Facturation par référence, stock résiduel, pic de stockage...',
        'Statistiques C.A., quantités, rubriques taxation'
      ]
    },
    {
      type: 'module',
      id: 'stock-mobile',
      title: 'Stock Mobile',
      subtitle: 'Flashez les Colis ...',
      icon: '📱',
      features: [
        'Accès direct à la Base de données en Wi-fi',
        'Gestion des commandes',
        'Saisie entrée, Validation, Mise en emplacement, Déplacement',
        'Recherche de colis, Détail, Liste par emplacement',
        'Sortie de colis, Gestion des bordereaux de sortie'
      ],
      logos: [
        { src: 'android-logo.png', alt: 'Android' }
      ]
    },
    {
      type: 'module',
      id: 'extranet',
      title: 'Extranet',
      subtitle: 'Portail Web pour vos clients',
      icon: '🌐',
      features: [
        'Consultation des remises, Retour d\'information, Historique',
        'Recherche multicritère, filtres cumulatifs',
        'Visualisation et téléchargement récépissés émargés',
        'Litiges, anomalies, incidents, photos, Messagerie'
      ]
    },
    {
      type: 'module',
      id: 'chargeur',
      title: 'Chargeur',
      subtitle: 'Vos clients saisissent en ligne !',
      icon: '✍️',
      features: [
        'Portail web pour vos clients',
        'Saisie des OT / Impression des étiquettes',
        'Emission des OT (EDI), bordereau pdf',
        'Intégration du retour d\'informations / Récépissés émargés',
        'Infos Facturation, facture Pdf, Historique'
      ]
    },
    {
      type: 'module',
      id: 'b2pweb',
      title: 'Dépose B2PWEB',
      subtitle: 'Rendez accessibles vos offres de transport !',
      icon: '🚛',
      features: [
        'Dépose sur Bourse de Fret via API "Post"',
        'Service de Dépose d\'offres B2PWeb',
        'Création, Modification, Rafraichissement et Suppression des offres'
      ],
      logos: [
        { src: 'b2pweb-logo.png', link: 'https://www.b2pweb.com/fr/', alt: 'B2PWeb' }
      ]
    },
    {
      type: 'module',
      id: 'chorus',
      title: 'Chorus Pro',
      subtitle: 'Déjà prêt pour la facturation électronique !',
      icon: '🎫',
      features: [
        'Dépose des factures numériques sur le portail Chorus Pro',
        'Gestion émises/à émettre, Filtres multicritères',
        'Sélection des factures, Fichiers joints',
        'Cycle de vie des factures'
      ]
    }
  ];

  function openModal(item) {
    selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    selectedItem = null;
    document.body.style.overflow = '';
  }
</script>


<section id="products" class="section">
  <div class="container">
    <h2 class="section-title">Notre gamme de progiciels transport & logistique</h2>
    <p class="section-intro">Configurés pour une optimisation idéale de votre activité.</p>
    
    <div class="grid">
      {#each products as product}
        <button class="card" onclick={() => openModal(product)}>
          <div class="icon">{product.icon}</div>
          <div class="model-tag">{product.model}</div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span class="learn-more">Voir les détails →</span>
        </button>
      {/each}
    </div>

    <!-- Modules Section -->
    <div class="modules-section">
      <div class="modules-header">
        <h3 class="modules-title">Modules complémentaires</h3>
        <p class="modules-intro">Personnalisez votre solution avec nos modules experts.</p>
        <button class="toggle-btn" onclick={() => showModules = !showModules}>
          {showModules ? 'Réduire la liste' : 'Découvrir nos modules experts'}
          <span class="chevron" style="transform: rotate({showModules ? '180deg' : '0deg'})">▼</span>
        </button>
      </div>

      {#if showModules}
        <div class="modules-grid">
          {#each modules as module}
            <button class="module-card" onclick={() => openModal(module)}>
              <div class="module-iconText">
                <span class="m-icon">{module.icon}</span>
                <h4>{module.title}</h4>
              </div>
              <p>{module.subtitle}</p>
              <span class="module-link">Détails →</span>
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Unified Details Modal -->
    {#if selectedItem}
      <div class="modal-overlay" onclick={closeModal} role="button" tabindex="0">
        <div class="modal-content" onclick={(e) => e.stopPropagation()} role="article">
          <button class="close-btn" onclick={closeModal}>&times;</button>
          
          <div class="modal-header">
            <div class="icon">{selectedItem.icon}</div>
            <div>
              <h3>{selectedItem.title}</h3>
              {#if selectedItem.type === 'product'}
                <span class="model-id">Référence : {selectedItem.model}</span>
              {:else}
                <span class="model-id">{selectedItem.subtitle}</span>
              {/if}
            </div>
          </div>

          <div class="modal-body">
            <div class="features-list">
              <h4>{selectedItem.type === 'product' ? 'Fonctionnalités incluses :' : 'Détails du module :'}</h4>
              <ul>
                {#each selectedItem.features as feature}
                  <li>{feature}</li>
                {/each}
              </ul>
            </div>

            {#if selectedItem.logos}
              <div class="modal-logos">
                {#each selectedItem.logos as logo}
                  {#if logo.link}
                    <a href={logo.link} target="_blank" rel="noopener noreferrer" class="logo-link">
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
      </div>
    {/if}

    <div class="products-footer">
        <p>Selon vos besoins en gestion informatique et les modes de transport que vous pratiquez, vous pouvez choisir une configuration logicielle adaptée.</p>
        
        <div class="versions-comparison">
            <div class="v-card">
                <strong>Version "Basic"</strong>
                <p>Vous permet de gérer les dossiers d'affrètement, de saisir les transports effectués par vos propres véhicules, puis de les facturer aux clients.</p>
            </div>
            <div class="v-card">
                <strong>Version "Essentiel"</strong>
                <p>Est complémentée de la gestion de l'exploitation (chargement, enlèvements, livraisons, ...) et du S.A.V. (rapports d'arrivage, souffrances, re-livraisons, retours, litiges, ...).</p>
            </div>
            <div class="v-card">
                <strong>Version "Expert"</strong>
                <p>Repousse les limites d'un dossier. Ses données sont dynamiques (pas de limite de points, d'articles, de moyens, d'options...). Elle inclut aussi une gestion optimisée de modes de transport particuliers.</p>
            </div>
        </div>
    </div>

  </div>
</section>

<style>
  .section {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
  }

  .section-title {
    color: white;
  }

  .section-title::after {
    background-color: var(--secondary);
  }

  .section-intro {
    color: rgba(255, 255, 255, 0.9);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }

  .card {
    background: white;
    padding: 3rem 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    text-align: center;
    border: 1px solid #eee;
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border-color: var(--primary);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .model-tag {
    background: var(--bg-light);
    color: var(--primary);
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.75rem;
    color: var(--text-main);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 2rem;
    flex-grow: 1;
  }

  .learn-more {
    color: var(--primary);
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.2s;
    border-bottom: 2px solid var(--secondary);
    padding-bottom: 2px;
  }

  .card:hover .learn-more {
    transform: translateX(5px);
  }

  /* Modules Section */
  .modules-section {
    margin-top: 6rem;
    background: white;
    padding: 4rem;
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  }

  .modules-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .modules-title {
    font-size: 2.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-main);
  }

  .modules-intro {
    color: var(--text-light);
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .toggle-btn {
    background: var(--secondary);
    color: #1a1a1a;
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 15px rgba(252, 203, 14, 0.3);
  }

  .toggle-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 25px rgba(252, 203, 14, 0.4);
    background: #f0c000;
  }

  .chevron {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
  }

  .modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .module-card {
    background: var(--bg-light);
    border: 1px solid transparent;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  .module-card:hover {
    background: white;
    border-color: var(--primary);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    transform: translateY(-3px);
  }

  .module-iconText {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .m-icon {
    font-size: 1.5rem;
  }

  .module-card h4 {
    margin: 0;
    font-size: 1.15rem;
    color: var(--text-main);
  }

  .module-card p {
    font-size: 0.9rem;
    color: var(--text-light);
    line-height: 1.4;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .module-link {
    font-size: 0.85rem;
    color: var(--primary);
    font-weight: 700;
  }

  /* Modal Additions */
  .modal-body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .modal-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1.5rem;
    background: #fdfdfd;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    border: 1px dashed #ddd;
  }

  .modal-logo-img {
    max-height: 50px;
    max-width: 150px;
    object-fit: contain;
    filter: grayscale(0.2);
    transition: filter 0.3s, transform 0.3s;
  }

  .logo-link:hover .modal-logo-img {
    filter: grayscale(0);
    transform: scale(1.05);
  }

  /* Footer and Versions Comparison */
  .products-footer {
    margin-top: 5rem;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 4rem;
  }

  .products-footer > p {
    max-width: 800px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
    font-style: italic;
    color: white;
  }

  .versions-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    text-align: left;
  }

  .v-card {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    border-bottom: 5px solid var(--secondary);
    color: var(--text-main);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .v-card strong {
    display: block;
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 0.75rem;
  }

  .v-card p {
    font-size: 0.95rem;
    margin: 0;
    color: var(--text-main);
    line-height: 1.6;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    padding: 1rem;
  }

  .modal-content {
    background: white;
    width: 100%;
    max-width: 650px;
    max-height: 90vh;
    border-radius: 20px;
    position: relative;
    padding: 3rem;
    overflow-y: auto;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    font-size: 2.5rem;
    color: var(--text-light);
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
  }

  .close-btn:hover {
    color: var(--secondary);
  }

  .modal-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1.5rem;
  }

  .modal-header .icon {
    margin-bottom: 0;
  }

  .modal-header h3 {
    margin-bottom: 0.25rem;
    font-size: 2rem;
  }

  .model-id {
    color: var(--primary);
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .features-list h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: var(--text-main);
  }

  .features-list ul {
    list-style: none;
    display: grid;
    gap: 1rem;
  }

  .features-list li {
    padding-left: 1.75rem;
    position: relative;
    line-height: 1.4;
    color: var(--text-main);
  }

  .features-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
  }

  @media (max-width: 600px) {
    .modules-section {
      padding: 2rem 1.5rem;
    }

    .modal-content {
      padding: 2rem 1.5rem;
    }
    
    .modal-header {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }
  }
</style>

