<script>
</script>

<section id="technologies" class="section">
  <div class="container">
    <h2 class="section-title">Environnement Technique</h2>
    <p class="intro">
      Nos solutions s'appuient sur des technologies robustes et éprouvées pour garantir la pérennité de vos outils.
    </p>

    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-icon">💻</div>
        <h3>Systèmes</h3>
        <p>Nos progiciels sont compatibles Windows en mode 32/64 bits.</p>
        <ul class="tech-list">
          <li><strong>Serveurs :</strong> Windows Server 2012 ou + récent.</li>
          <li><strong>Clients :</strong> Windows 8, 10 et 11.</li>
          <li>Serveur dédié, machine virtuelle, hébergement.</li>
        </ul>
      </div>

      <div class="tech-card">
        <div class="tech-icon">📊</div>
        <h3>Bases de données</h3>
        <p>
          Moteur Client/Serveur <strong>HyperFile</strong> garantissant des accès rapides et fiables pour les réseaux jusqu'à plusieurs dizaines de postes.
        </p>
      </div>

      <div class="tech-card">
        <div class="tech-icon">🛠️</div>
        <h3>Outils de développement</h3>
        <p>
          Comme de très nombreuses SSII, nous avons choisi <strong>Windev</strong> pour concevoir nos logiciels. 
          C'est l'Atelier Génie Logiciel N° 1 en France !
        </p>
      </div>

      <div class="tech-card">
        <div class="tech-icon">🛡️</div>
        <h3>Télé-assistance</h3>
        <p>
          Nous disposons d'un outil propriétaire afin d'assurer les prises de main à distance sécurisées avec 
          <strong>cryptage 128 bits</strong>.
        </p>
      </div>
    </div>

    <p class="footer-note">
      Nos outils suivent l'évolution permanente pour rester à la pointe de la technologie.
    </p>
  </div>
</section>

<style>
  .section {
    background-color: var(--primary-dark);
    color: white;
  }

  .section-title {
    color: white;
  }
  
  .section-title::after {
    background-color: white;
  }

  .intro {
    max-width: 700px;
    margin: 0 auto 3rem;
    text-align: center;
    color: rgba(255,255,255,0.9);
    font-size: 1.1rem;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .tech-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
  }

  .tech-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  .tech-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    line-height: 1.6;
    color: rgba(255,255,255,0.85);
  }

  .tech-list {
    list-style: none;
    margin-top: 1rem;
    padding: 0;
    text-align: left;
    font-size: 0.95rem;
  }

  .tech-list li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
  }

  .tech-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: rgba(255,255,255,0.6);
  }

  .footer-note {
    text-align: center;
    font-style: italic;
    font-weight: 500;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .tech-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

