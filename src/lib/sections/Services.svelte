<script>
  const services = [
    {
      title: "Conseil",
      icon: "💡",
      text: "À tout moment, notre équipe peut vous apporter son expertise pour étudier avec vous vos besoins en matériels."
    },
    {
      title: "Installation",
      icon: "⚙️",
      text: "Nous intervenons sur réseaux neufs ou existants et prenons en charge le paramétrage de nos applications. Nous communiquons directement avec vos prestataires matériel/logiciel pour vous éviter l'épreuve du \"langage informaticien\"."
    },
    {
      title: "Formation",
      icon: "🎓",
      text: "Sur site ou en distanciel, nous vous apportons toutes les connaissances nécessaires pour l'utilisation de nos logiciels selon l'analyse de vos besoins et vos objectifs opérationnels."
    },
    {
      title: "Développement",
      icon: "💻",
      text: "Besoin spécifique ? Nouvelle fonctionnalité ? Nous répondons à vos attentes. À ce jour, tous les développements demandés par nos clients ont été réalisés !"
    },
    {
      title: "Contrat Sérénité",
      icon: "🛡️",
      text: "Maintenance, assistance et mises à jour incluses. Notre équipe reste à votre disposition pour toute question ou dépannage via assistance à distance en direct."
    }
  ];
</script>

<section id="services" class="section">
  <div class="container">
    <h2 class="section-title">Nos Services</h2>
    
    <div class="services-grid">
      {#each services as service}
        <div class="service-card">
          <div class="service-icon">{service.icon}</div>
          <div class="service-info">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        </div>
      {/each}
    </div>

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

  .service-card:hover {
    transform: translateY(-5px);
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border-color: var(--primary);
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
    background: var(--primary);
    color: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 126, 185, 0.2);
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

