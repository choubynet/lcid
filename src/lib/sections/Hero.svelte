<script>
  import { base } from '$app/paths'
</script>

<section id="home" class="hero" style="background-image: url('{base}/images/iStock-1198082588.jpg');">
  <div class="container hero-content">

    <h1 class="hero-title">
      Votre transport,<br>
      <span class="highlight">piloté avec précision.</span>
    </h1>
    <p class="hero-text">
        LCID conçoit des logiciels de gestion transport & logistique depuis 30 ans.<br>
        Exploitation, facturation, traçabilité : une seule suite, zéro compromis.
    </p>
    <div class="actions">
      <a href="#products" class="btn btn-primary">Découvrir nos solutions</a>
      <a href="#contact" class="btn btn-outline">Demander une démo</a>
    </div>
  </div>
  <div class="hero-overlay"></div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 85vh;
    min-height: 85dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image moved to inline style for dynamic base path */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
    text-align: center;
    overflow: hidden;
  }



  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 83, 122, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 1;
  }


  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    padding: 0 1rem;
    animation: fadeIn 1s ease-out;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.15;
    color: white;
  }

  .hero-title .highlight {
    color: var(--secondary);
  }

  .hero-text {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    opacity: 0.95;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
  }

  .actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: var(--secondary);
    color: #1a1a1a;
    padding: 1rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.05rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(252, 203, 14, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(252, 203, 14, 0.5);
    background: #f0c000;
  }

  .btn-outline {
    background: transparent;
    border: 2px solid white;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
  }

  .btn-outline:hover {
    background: white;
    color: var(--primary);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
