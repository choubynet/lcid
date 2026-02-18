<script>
  import { base } from '$app/paths';
</script>

<section id="home" class="hero" style="background-image: url('{base}/images/truck2.jpg');">
  <div class="container hero-content">

    <h1 class="hero-title">
      LCID
      <span>Informatique et développement</span>
    </h1>
    <p class="hero-text">
        Des solutions informatiques pour toutes vos activités logistiques.<br>
        30 années d'expérience au service des transporteurs
    </p>
    <div class="actions">
      <a href="#products" class="btn">Découvrir nos solutions</a>
      <a href="#contact" class="btn btn-outline">Nous Contacter</a>
    </div>
  </div>
  <div class="hero-overlay"></div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    min-height: 100dvh; /* Dynamic viewport height for better mobile support */
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
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    color: white;
  }

  .hero-title span {
    display: block;
    font-size: 0.4em;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-top: 1rem;
    opacity: 0.9;
  }

  .hero-text {
    font-size: 1.25rem;
    margin-bottom: 3rem;
    opacity: 0.9;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
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
