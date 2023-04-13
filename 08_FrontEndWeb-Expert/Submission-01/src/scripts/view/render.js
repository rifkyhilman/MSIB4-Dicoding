import Data from '../data/DATA.json';

const postcontainer = document.querySelector(".posts");

function render(){
  const contents = Data.restaurants.map(a => {
    const template = `
    <article class="post-item">
      <img class="post-item__thumbnail"
            src="${a.pictureId}"
            alt="${a.name}">
      <p class="city-label">${a.city}</p>
      <div class="post-item__content">
      <h1 class="post-item__title">${a.name}</h1>
        <p class="post-item__food">
          ${a.food}
        </p>
        <div class="post-item__rating">
          <img src="${a.star}" alt="img rating star">
          <p>(${a.rating})</p>
        </div>
        <p class="post-item__description">${a.description.substring(0,250)}</p>
        <a  href="?id=${a.id}" class="btn-detail">View Detail</a>
      </div>
    </article>
    `
    return template
  })
  postcontainer.innerHTML = contents.join("");
}

window.addEventListener('load', render);