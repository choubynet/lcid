<script>
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header class="navbar">
  <div class="container navbar-content">
    <a href="#home" class="logo" onclick={closeMenu}>
      LCID
    </a>

    <button class="hamburger" aria-label="Menu" onclick={toggleMenu} aria-expanded={isMenuOpen}>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <nav class:open={isMenuOpen}>
      <a href="#home" onclick={closeMenu}>Accueil</a>
      <a href="#story" onclick={closeMenu}>Notre histoire</a>
      <a href="#products" onclick={closeMenu}>Produits</a>
      <a href="#services" onclick={closeMenu}>Services</a>
      <a href="#technologies" onclick={closeMenu}>Technologies</a>
      <a href="#contact" class="btn-contact" onclick={closeMenu}>Contact</a>
    </nav>
  </div>
</header>

<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
    text-decoration: none;
    letter-spacing: 1px;
    z-index: 1001; /* Above mobile menu overlay if needed */
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  nav a {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  nav a:hover {
    color: var(--primary);
  }

  /* Special style for Contact button in navbar */
  nav .btn-contact {
    padding: 0.5rem 1.25rem;
    background-color: var(--primary);
    color: white;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  nav .btn-contact:hover {
    color: white; /* Override default hover */
    background-color: var(--primary-dark);
  }

  /* Hamburger Menu */
  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
    z-index: 1001;
    padding: 0.5rem;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--text-main);
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    nav {
      position: fixed;
      top: 0;
      right: -100%; /* Hidden by default */
      width: 80%;
      height: 100vh;
      background: white;
      flex-direction: column;
      justify-content: center;
      box-shadow: -5px 0 15px rgba(0,0,0,0.1);
      transition: right 0.3s ease-in-out;
      padding: 2rem;
    }

    nav.open {
      right: 0;
    }

    nav a {
      font-size: 1.25rem;
      margin: 1rem 0;
    }

    /* Hamburger Animation when open */
    .hamburger[aria-expanded="true"] .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger[aria-expanded="true"] .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger[aria-expanded="true"] .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
</style>
