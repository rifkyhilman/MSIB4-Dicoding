import './anime-item.js';

class AnimeList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
      }

    set anime(anime) {
        this._anime = anime;
        this.render();
      }
   
    render() {
        this.shadowDOM.innerHTML = '';
        this._anime.forEach(item => {
          const AnimeItemElement = document.createElement('anime-item');
          AnimeItemElement.anime = item;
          this.shadowDOM.appendChild(AnimeItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            };
        </style>
        `;
    
       
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
  }

  customElements.define('anime-list', AnimeList);