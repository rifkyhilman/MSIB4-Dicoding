class AppBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .hero {
            width: 100%;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(https://images2.alphacoders.com/742/742320.png);
            background-size: cover;
            background-position: 60% center;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }
        </style>
        
        <section class="hero">
            <div class="hero-inner"</div>
        </section>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);