<script>
  let products = [
    {
      id: "basic",
      title: "Basic",
      model: "FT5G",
      description: "La solution idéale pour débuter et gérer l'essentiel de votre activité avec simplicité.",
      icon: "🔹"
    },
    {
      id: "essentiel",
      title: "Essentiel",
      model: "TP5G",
      description: "Le cœur de notre expertise : des fonctionnalités avancées pour une gestion quotidienne optimisée.",
      icon: "💎"
    },
    {
      id: "expert",
      title: "Expert",
      model: "XT5G",
      description: "La puissance maximale pour les structures exigeantes nécessitant un contrôle total et précis.",
      icon: "🚀"
    }
  ];

  function handleProductClick(id) {
    console.log(`Navigation vers le détail de : ${id}`);
    // On s'en occupera plus tard comme demandé
    alert(`Détails pour ${id.toUpperCase()} (Bientôt disponible)`);
  }
</script>

<section id="products" class="section">
  <div class="container">
    <h2 class="section-title">Nos Logiciels</h2>
    <p class="intro">Découvrez notre gamme de solutions adaptées à chaque taille d'entreprise.</p>
    
    <div class="grid">
      {#each products as product}
        <button class="card" onclick={() => handleProductClick(product.id)}>
          <div class="icon">{product.icon}</div>
          <div class="model-tag">{product.model}</div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span class="learn-more">Voir les détails →</span>
        </button>
      {/each}
    </div>
  </div>
</section>

<style>
  .section {
    background-color: var(--bg-light);
  }

  .intro {
    text-align: center;
    max-width: 600px;
    margin: -1.5rem auto 3rem;
    color: var(--text-light);
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
    font-weight: 600;
    font-size: 0.95rem;
    transition: transform 0.2s;
  }

  .card:hover .learn-more {
    transform: translateX(5px);
  }
</style>

