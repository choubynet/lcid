<script>
  // Remplacer ces noms par les vrais noms/logos de vos clients
  const clients = [
    "Client Transport A",
    "Client Transport B",
    "Client Logistique C",
    "Client Messagerie D",
    "Client Express E",
    "Client Fret F",
    "Client Route G",
    "Client Cargo H"
  ];
</script>

<section class="trust-bar">
  <div class="container">
    <p class="trust-label">Ils nous font confiance depuis plus de 30 ans</p>
    <div class="logos-track">
      <div class="logos-slide">
        {#each clients as client, i (client + '-a-' + i)}
          <span class="client-name">{client}</span>
        {/each}
        {#each clients as client, i (client + '-b-' + i)}
          <span class="client-name">{client}</span>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .trust-bar {
    background: white;
    padding: 2.5rem 2rem;
    border-bottom: 1px solid #eee;
  }

  .trust-label {
    text-align: center;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-light);
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .logos-track {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }

  .logos-slide {
    display: flex;
    gap: 4rem;
    animation: scroll 30s linear infinite;
    width: max-content;
    will-change: transform;
  }

  .client-name {
    flex-shrink: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #bbb;
    text-transform: uppercase;
    letter-spacing: 1px;
    white-space: nowrap;
    padding: 0.5rem 0;
    transition: color 0.3s;
  }

  .client-name:hover {
    color: var(--primary);
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @media (max-width: 768px) {
    .logos-slide {
      gap: 3rem;
      animation-duration: 20s;
    }
  }
</style>
