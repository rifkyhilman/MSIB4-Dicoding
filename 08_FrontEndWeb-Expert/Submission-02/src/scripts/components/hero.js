class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">For the love of delicious food</h1>
            <p class="hero__tagline">Come with family & feel the joy of mouthwartering food</p>
        </div>
    </section>
    `;
  }
}

customElements.define('jumbutron', Hero);
