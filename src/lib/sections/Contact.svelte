<script>
    let formStatus = $state('idle'); // idle, submitting, success, error

    function handleSubmit(event) {
        event.preventDefault();
        formStatus = 'submitting';
        
        // Simulating network request
        setTimeout(() => {
            formStatus = 'success';
        }, 1500);
    }
</script>

<section id="contact" class="section">
  <div class="container">
    <h2 class="section-title">Contactez-nous</h2>
    
    <div class="contact-wrapper">
        <div class="contact-info">
            <h3>Discutons de votre projet</h3>
            <p>Nous sommes à votre écoute pour analyser vos besoins et vous proposer les solutions les plus adaptées.</p>
            
            <div class="info-item">
                <strong>Adresse</strong>
                <p>123 Rue de l'Innovation<br>75000 Paris, France</p>
            </div>
            
            <div class="info-item">
                <strong>Email</strong>
                <p><a href="mailto:contact@lcid.fr">contact@lcid.fr</a></p>
            </div>
            
            <div class="info-item">
                <strong>Téléphone</strong>
                <p><a href="tel:+33475234552">(+33) 4.75.23.45.52</a></p>
            </div>
        </div>

        <div class="contact-form-wrapper">
            {#if formStatus === 'success'}
                <div class="success-message">
                    <h3>Message envoyé !</h3>
                    <p>Merci de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.</p>
                    <button class="btn btn-outline" onclick={() => formStatus = 'idle'}>Envoyer un autre message</button>
                </div>
            {:else}
                <form onsubmit={handleSubmit} class="contact-form">
                    <div class="form-row">
                        <div class="form-group sm">
                            <label for="civility">Civilité</label>
                            <select id="civility" name="civility">
                                <option value="">Choisir...</option>
                                <option value="M.">M.</option>
                                <option value="Mme">Mme</option>
                            </select>
                        </div>
                        <div class="form-group lg">
                            <label for="name">Nom & Prénom *</label>
                            <input type="text" id="name" name="name" required placeholder="Ex: Jean Dupont">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="company">Société *</label>
                        <input type="text" id="company" name="company" required placeholder="Le nom de votre entreprise">
                    </div>

                    <div class="form-group">
                        <label for="address">Adresse</label>
                        <input type="text" id="address" name="address" placeholder="123 rue de la Paix">
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="zip_city">CP & Ville</label>
                            <input type="text" id="zip_city" name="zip_city" placeholder="Ex: 75000 Paris">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required placeholder="votre@email.com">
                        </div>
                        <div class="form-group">
                            <label for="phone">Téléphone *</label>
                            <input type="tel" id="phone" name="phone" required placeholder="04 75 ..">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" rows="4" required placeholder="Comment pouvons-nous vous aider ?"></textarea>
                    </div>

                    <button type="submit" class="btn block-btn" disabled={formStatus === 'submitting'}>
                        {#if formStatus === 'submitting'}
                            Envoi en cours...
                        {:else}
                            Envoyer le message
                        {/if}
                    </button>
                </form>
            {/if}
        </div>
    </div>
  </div>
</section>

<style>
  .section {
    background-color: var(--bg-light);
  }

  .contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .contact-info h3 {
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .info-item {
    margin-top: 2rem;
  }

  .info-item strong {
    display: block;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--text-light);
    margin-bottom: 0.25rem;
  }

  a {
    color: var(--text-main);
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: var(--primary);
  }

  .contact-form-wrapper {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .form-row {
    display: flex;
    gap: 1rem;
  }

  .form-group {
    margin-bottom: 1.25rem;
    flex: 1;
  }

  .form-group.sm { flex: 0 0 100px; }
  .form-group.lg { flex: 1; }

  label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--text-main);
  }

  input, textarea, select {
    width: 100%;
    padding: 0.65rem 0.8rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.95rem;
    transition: all 0.2s;
    background-color: #fcfcfc;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--primary);
    background-color: white;
    box-shadow: 0 0 0 3px rgba(0, 126, 185, 0.1);
  }

  .block-btn {
    width: 100%;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 6px;
    margin-top: 0.5rem;
  }
  
  .block-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .success-message {
    text-align: center;
    padding: 2rem;
  }

  .success-message h3 {
    color: #28a745;
    margin-bottom: 1rem;
  }

  @media (max-width: 900px) {
    .contact-wrapper {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 480px) {
    .form-row {
        flex-direction: column;
        gap: 0;
    }
    .form-group.sm { flex: 1; }
  }
</style>

