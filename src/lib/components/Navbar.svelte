<script>
  import { base } from '$app/paths';
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
      <img src="{base}/images/logo.png" alt="LCID Logo" class="logo-img" />
    </a>


    <button class="hamburger" aria-label="Menu" onclick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="main-menu">

      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <nav id="main-menu" class:open={isMenuOpen}>
      <a href="#home" onclick={closeMenu}>Accueil</a>
      <a href="#products" onclick={closeMenu}>Solutions</a>
      <a href="#services" onclick={closeMenu}>Services</a>
      <a href="#story" onclick={closeMenu}>Notre histoire</a>
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
    display: flex;
    align-items: center;
    z-index: 1001;
  }

  .logo-img {
    height: 60px;
    width: auto;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .logo:hover .logo-img {
    transform: scale(1.05);
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
    padding: 0.6rem 1.5rem;
    background-color: var(--secondary);
    color: #1a1a1a;
    border-radius: 50px;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  nav .btn-contact:hover {
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(252, 203, 14, 0.4);
    background-color: #f0c000;
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
