<script>
  import { base } from '$app/paths';

  const clients = [
    { name: 'Annecybox', src: 'annecybox_4AAA46CA_.png' },
    { name: 'B2C', src: 'B2C_BCB3A7FE_.png' },
    { name: 'Félix', src: 'FELIX_764A7072_.png' },
    { name: 'Glaizot', src: 'Glaizot_6941794C_.png' },
    { name: 'Huguet', src: 'Huguet2_F9DE164_.jpg' },
    { name: 'Optivia', src: 'Optivia2_A40374A3_.jpg' },
    { name: 'Sainthon', src: 'Sainthon_63903D3A_.png' },
    { name: 'Sotraman', src: 'Sotraman_A82099DD_.png' },
  ];
</script>

<section class="trust-bar">
  <div class="container">
    <p class="trust-label">Ils nous font confiance depuis plus de 30 ans</p>
    <div class="logos-track">
      <div class="logos-slide">
        {#each clients as client, i (client.name + '-a-' + i)}
          <img src="{base}/clients/{client.src}" alt={client.name} class="client-logo" />
        {/each}
        {#each clients as client, i (client.name + '-b-' + i)}
          <img src="{base}/clients/{client.src}" alt={client.name} class="client-logo" />
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
    align-items: center;
    animation: scroll 30s linear infinite;
    width: max-content;
    will-change: transform;
  }

  .client-logo {
    flex-shrink: 0;
    height: 45px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
    opacity: 0.6;
    filter: grayscale(100%);
    transition: all 0.3s ease;
  }

  .client-logo:hover {
    opacity: 1;
    filter: grayscale(0%);
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
    .client-logo {
      height: 35px;
      max-width: 110px;
    }
  }
</style>
