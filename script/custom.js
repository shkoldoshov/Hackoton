class SuperheroCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const name = this.getAttribute('name') || 'Unknown';
      const superpower = this.getAttribute('superpower') || 'Unknown';
      const affiliation = this.getAttribute('affiliation') || 'Unknown';
      const status = this.getAttribute('status') || '';
      const galaxy = this.getAttribute('galaxy') || '';

      // Create card elements
      const card = document.createElement('div');
      card.classList.add('superhero-card');

      const header = document.createElement('h2');
      header.textContent = name;

      const powers = document.createElement('p');
      powers.textContent = `Superpower: ${superpower}`;

      const details = document.createElement('p');
      if (affiliation === 'Avenger') {
        details.textContent = `Affiliation: ${affiliation}. Status: ${status}`;
      } else if (affiliation === 'Guardian of the Galaxy') {
        details.textContent = `Affiliation: ${affiliation}. Galaxy: ${galaxy}`;
      } else {
        details.textContent = `Affiliation: ${affiliation}`;
      }

      // Append elements to shadow DOM
      card.appendChild(header);
      card.appendChild(powers);
      card.appendChild(details);
      this.shadowRoot.appendChild(card);
    }
  }

  // Define the custom element
  customElements.define('superhero-card', SuperheroCard);