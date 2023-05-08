import ENDPOINT from '../../globals/api-endpoint';
import { generateReview, generateFoodAndDrink } from '../../utils/generator';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster"
  src="${ENDPOINT.LARGE_IMAGE + restaurant.pictureId}"
  alt="${restaurant.name}">
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Alamat : </h4>
    <p>${restaurant.address}</p>
    <h4>Kota : </h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi : </h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menus">
    <h4>Menus</h4>
    <div class="restaurant__makanan">
    <ul> Makanan </ul>
      ${generateFoodAndDrink(restaurant.menus.foods)}
    </div>
    <div class="restaurant__minuman">
    <h4>Minuman</h4>
      ${generateFoodAndDrink(restaurant.menus.drinks)}
    </div>
  </div>
  <div class="restaurant__reviews">
    <h3>Customer Rivewer : </h3>
    ${generateReview(restaurant.customerReviews)}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
  <div class="restaurant-item__header">
    <img class="restaurant-item__header__poster" alt="${restaurant.name}" src="${ENDPOINT.MEDIUM_IMAGE + restaurant.pictureId}">
    <div class="restaurant-item__header__label">
      <p>${restaurant.city}</p>
    </div>
  </div>
  <div class="restaurant-item__content">
    <h2><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
    <div class="restaurant-item__content__rating">
      <p><span>⭐️(${restaurant.rating})</span></p>
    </div>
    <div class="restaurant-item__content__description">
        <p>${restaurant.description}</p>
      </div>
  </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
