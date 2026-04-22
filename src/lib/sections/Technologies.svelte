<script>
</script>

<section id="technologies" class="section">
  <div class="container">
    <h2 class="section-title">Une infrastructure fiable et éprouvée</h2>
    <p class="section-intro">
      Windows, HyperFile, Windev : des technologies solides pour des performances au quotidien.
    </p>

    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-icon">💻</div>
        <h3>Systèmes</h3>
        <p>Nos progiciels sont compatibles Windows en mode 32/64 bits.</p>
        <ul class="tech-list">
          <li><strong>Serveurs :</strong> Windows Server 2012 ou + récent.</li>
          <li><strong>Clients :</strong> Windows 8, 10 et 11.</li>
          <li>Système serveur dédié, machine virtuelle, hébergement.</li>
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
          Nous disposons d'un outil propriétaire afin d'assurer les prises de main à distance sur les postes clients.
          Il fonctionne en mode sécurisé avec <strong>cryptage 128 bits</strong>.
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
    background-color: var(--bg-light);
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .tech-card {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
    border: 1px solid #eee;
    transition: all 0.3s ease;
    text-align: center;
  }

  .tech-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  }

  .tech-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-main);
  }

  p {
    line-height: 1.6;
    color: var(--text-light);
  }

  .tech-list {
    list-style: none;
    margin-top: 1.5rem;
    padding: 0;
    text-align: left;
    font-size: 0.95rem;
  }

  .tech-list li {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-main);
  }

  .tech-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
  }

  .footer-note {
    text-align: center;
    font-style: italic;
    font-weight: 500;
    margin-top: 1rem;
    color: var(--text-light);
  }

  @media (max-width: 768px) {
    .tech-grid {
      grid-template-columns: 1fr;
    }
    .tech-card {
      padding: 1.75rem;
    }
  }
</style>

