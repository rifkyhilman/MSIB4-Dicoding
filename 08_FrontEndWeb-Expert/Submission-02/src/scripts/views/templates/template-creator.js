import ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="post-item__thumbnail"
  src="${ENDPOINT.LARGE_IMAGE + restaurant.pictureId}"
  alt="${restaurant.name}">
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Alamat : </h4>
    <p>${restaurant.address}</p>
    <h4>Kota : </h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi : </h4>
    <p>${restaurant.description}</p>
    <h4>Menu Makanan : </h4>
    <p>${restaurant.menus.foods}</p>
    <h4>Menu Minuman : </h4>
    <p>${restaurant.menus.drinks}</p>
  </div>
  <div class="movie__overview">
    <h3>Customer Rivewer : </h3>
    <p>${restaurant.customerReviews}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item">
<img class="post-item__thumbnail"
      src="${ENDPOINT.MEDIUM_IMAGE + restaurant.pictureId}"
      alt="${restaurant.name}">
<p class="city-label">${restaurant.city}</p>
<div class="post-item__content">
<h1 class="post-item__title">${restaurant.name}</h1>
  <p class="post-item__food">
    ${restaurant.food}
  </p>
  <div class="post-item__rating">
    <p>⭐️(${restaurant.rating})</p>
  </div>
  <p class="post-item__description">${restaurant.description.substring(0, 250)}</p>
  <a  href="#/detail/${restaurant.id}" class="btn-detail">View Detail</a>
</div>
</article>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
