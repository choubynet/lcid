<script>
  import { base } from '$app/paths';

  let showFormationDetails = $state(false);

  const programs = [
    { name: "Gestion de Stock : Gestion des Commandes avec Flashage", details: "[Satisfaction = 100 %, Réussite = 100 %]", file: "Programme de formation - ST5G - Gestion des commandes de Stockage avec Flashage - 202311.pdf" },
    { name: "Gestion du Transport : TP5G - Gestion Exploitation avec Application Mobile TM5G - Facturation - Gestion de Parc", details: "[Satisfaction=92 % - Réussite=83 %]", file: "Programme de formation - TP5G - Gestion Exploitation avec Application Mobile TM5G - Gestion Facturation - Gestion de Parc - 202405.pdf" },
    { name: "Formation Complémentaire Logiciel Transport TP5G (Perfectionnement Facturation I)", details: "[Satisfaction=79 % - Réussite=83 %]", file: "Programme de formation - TP5G - Perfectionnement facturation I.pdf" },
    { name: "Formation Complémentaire Logiciel Transport TP5G et TM5G (Perfectionnement Exploitation II)", details: "[Satisfaction = 77 %, Réussite = 83 %]", file: "Programme de formation - TP5G et TM5G - Formation complementaire exploitation II.pdf" },
    { name: "Gestion du Transport : FT5G", details: "[Satisfaction = 97 %, Réussite = 96 %]", file: "Programme de formation - FT5G - Gestion du Transport - 202404.pdf" },
    { name: "Formation complémentaire Logiciel Transport TP5G (Perfectionnement I)", details: "[Satisfaction = 100 %, Réussite = 96 %]", file: "Programme de formation - TP5G - Perfectionnement facturation I (1).pdf" },
    { name: "Programme de formation - XT5G - Gestion Dossiers Expert", details: "[Satisfaction = 85 %, Réussite = 94 %]", file: "Programme de formation - XT5G - Gestion Dossiers Expert.pdf" },
    { name: "Programme de formation - XT5G - Gestion du Planning Expert", details: "[Satisfaction = 82 %, Réussite = 92 %]", file: "Programme de formation - XT5G - Gestion du Planning Expert.pdf" },
    { name: "Programme de formation - XT5G - Facturation Expert", details: "[Satisfaction = 85 %, Réussite = 90 %]", file: "Programme de formation - XT5G - Facturation Expert.pdf" },
    { name: "Programme de formation - XT5G - Statistiques Expert", details: "[Satisfaction = 91 %, Réussite = 92 %]", file: "Programme de formation - XT5G - Statistiques Expert.pdf" },
    { name: "Programme de formation - GP5G-TP5G - Rentabilite", details: "[Satisfaction = 85 %, Réussite = 90 %]", file: "Programme de formation - GP5G-TP5G - Rentabilite.pdf" },
    { name: "Gestion du Parc : GP5G", details: "[Satisfaction = 96 %, Réussite = 98 %]", file: "Programme de formation - GP5G - Gestion du Parc - 202405c (1).pdf" }
  ];

  const services = [
    {
      id: "conseil",
      title: "Conseil",
      icon: "💡",
      text: "À tout moment, notre équipe peut vous apporter son expertise pour étudier avec vous vos besoins en matériels."
    },
    {
      id: "installation",
      title: "Installation",
      icon: "⚙️",
      text: "Nous intervenons sur réseaux neufs ou existants et prenons en charge le paramétrage de nos applications. Nous communiquons directement avec vos prestataires matériel/logiciel pour vous éviter l'épreuve du \"langage informaticien\"."
    },
    {
      id: "formation",
      title: "Formation",
      icon: "🎓",
      text: "Sur site ou en distanciel, nous vous apportons toutes les connaissances nécessaires pour l'utilisation de nos logiciels selon l'analyse de vos besoins et vos objectifs opérationnels."
    },
    {
      id: "developpement",
      title: "Développement",
      icon: "💻",
      text: "Vous avez un besoin spécifique à votre entreprise ? Vous souhaitez profiter d'une nouvelle fonctionnalité dans nos logiciels ? Nous pouvons répondre à vos attentes. A ce jour, tous les développements demandés par nos clients ont été réalisés !"
    },
    {
      id: "contrat",
      title: "Contrat Sérénité",
      icon: "🛡️",
      text: "Vous bénéficiez d'un service de Maintenance/Assistance (avec suivi des mises à jour sans frais supplémentaires). Notre équipe reste à votre disposition pour toute question/dépannage (coût inclus dans le contrat). Via une connexion haut débit, nous pouvons vous assister en direct sur votre poste."
    }
  ];


  $effect(() => {
    if (showFormationDetails) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  });
</script>


<section id="services" class="section">
  <div class="container">
    <h2 class="section-title">Un service "sur mesure" pour une optimisation fonctionnelle</h2>
    <p class="section-intro">Toutes nos compétences pour la mise en route de votre gestion transport.</p>
    
    <div class="services-grid">
      {#each services as service}
        <div 
          class="service-card" 
          class:clickable={service.id === 'formation'}
          onclick={() => service.id === 'formation' && (showFormationDetails = true)}
          role={service.id === 'formation' ? 'button' : 'article'}
          tabindex={service.id === 'formation' ? 0 : -1}
        >
          <div class="service-icon">{service.icon}</div>
          <div class="service-info">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            {#if service.id === 'formation'}
              <span class="more-info">Informations complémentaires →</span>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <!-- Modal for Formation Details -->
    {#if showFormationDetails}
      <div class="modal-overlay" onclick={() => showFormationDetails = false} role="button" tabindex="0">
        <div class="modal-content" onclick={(e) => e.stopPropagation()} role="article">
          <button class="close-btn" onclick={() => showFormationDetails = false}>&times;</button>
          
          <div class="modal-header">
            <img src="{base}/images/Qualiopi-logo.png" alt="Logo Qualiopi" class="qualiopi-logo" />
            <div class="header-text">
              <h3>Prestataire de formation professionnelle</h3>
              <p>Numéro de Déclaration d'Activité de formation (1) :</p>
              <p><strong>N° 28140299914</strong> enregistré auprès du préfet de la région Normandie.</p>
            </div>
          </div>

          <div class="modal-body">
            <h3>Programmes de formation</h3>
            <div class="programs-list">
              {#each programs as program}
                <div class="program-item">
                  <div class="program-info">
                    <span class="program-name">{program.name}</span>
                    <span class="program-stats">{program.details}</span>
                  </div>
                  <a href="{base}/pdf/{program.file}" download="{program.file}" class="download-btn" title="Télécharger le PDF">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </a>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/if}

    <div class="services-footer">

      <p>
        Nos solutions sont adaptées à la demande afin de "coller" au mieux aux besoins des utilisateurs.
        Vos spécificités sont intégrées aux fonctionnalités des outils.
      </p>
      <p class="highlight">
        Cette souplesse constitue un atout majeur pour votre satisfaction au quotidien.
      </p>
    </div>
  </div>
</section>

<style>
  .section {
    background-color: var(--bg-white);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .service-card {
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    background: var(--bg-light);
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }

  .service-card.clickable {
    cursor: pointer;
  }

  .service-card:hover {
    transform: translateY(-5px);
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border-color: var(--primary);
  }

  .more-info {
    display: inline-block;
    margin-top: 1rem;
    color: var(--primary);
    font-weight: 700;
    font-size: 0.9rem;
    transition: all 0.2s;
    border-bottom: 2px solid var(--secondary);
    padding-bottom: 2px;
  }

  .service-card:hover .more-info {
    transform: translateX(5px);
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 1rem;
    backdrop-filter: blur(5px);
  }

  .modal-content {
    background: white;
    padding: 3rem;
    border-radius: 16px;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 2.5rem;
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    transition: color 0.2s;
  }

  .close-btn:hover {
    color: var(--primary);
  }

  .modal-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
  }

  .qualiopi-logo {
    height: 100px;
    width: auto;
  }

  .header-text h3 {
    font-size: 1.5rem;
    color: var(--text-main);
    margin-bottom: 0.5rem;
  }

  .modal-body h3 {
    font-size: 1.4rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
  }

  .programs-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .program-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: var(--bg-light);
    border-radius: 8px;
    transition: background 0.2s;
  }

  .program-item:hover {
    background: #e9ecef;
  }

  .program-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-right: 1rem;
  }

  .program-name {
    font-weight: 600;
    color: var(--text-main);
    line-height: 1.4;
  }

  .program-stats {
    font-size: 0.85rem;
    color: var(--text-light);
    font-style: italic;
  }

  .download-btn {
    color: var(--primary);
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.2s;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .download-btn:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .modal-header {
      flex-direction: column;
      text-align: center;
    }
    .modal-content {
      padding: 2rem 1.5rem;
    }
    .program-item {
      align-items: flex-start;
    }
  }


  .service-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  .service-info h3 {
    font-size: 1.25rem;
    color: var(--primary);
    margin-bottom: 0.75rem;
  }

  .service-info p {
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .services-footer {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 148, 216, 0.25);
  }

  .services-footer p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .services-footer .highlight {
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0;
    opacity: 1;
  }

  @media (max-width: 768px) {
    .service-card {
      flex-direction: column;
      text-align: center;
      padding: 1.5rem;
    }
  }
</style>

