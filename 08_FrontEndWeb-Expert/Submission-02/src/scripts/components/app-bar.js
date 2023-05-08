class AppBar extends HTMLElement {
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
    <section id= "content" class="restaurants">
        <div class="restaurants__content">
            <h1 class="restaurants__content__label">Explore Restaurant</h1>
            <div id="restaurants__list"></div>
        </div>
    </section>
  `;
  }
}

customElements.define('app-bar', AppBar);
