import ENDPOINT from '../../globals/api-endpoint';
import {
  generateReview, generateFoodAndDrink, generateCategories,
} from '../../utils/generator';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__title">
    <div class="restaurant__title__categorie">  
      <h2>${restaurant.name}</h2>${generateCategories(restaurant.categories)}
    </div>
    <div class="restaurant__title__addres">
      <p><span class="material-symbols-outlined">
      location_on
      </span>${restaurant.address}, ${restaurant.city}</p>
    </div>
  </div>
  <div class="restaurant__poster">
    <img 
    src="${ENDPOINT.LARGE_IMAGE + restaurant.pictureId}"
    alt="${restaurant.name}">
  </div>
  <div class="restaurant__description">
    <h2>Deskripsi</h2>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menus">
    <h2>Menu Foods & Drinks</h2>
    <div class="restaurant__menus__list">
      <div class="restaurant__menus__list__foods">
      <div class="restaurant__menus__list__foods__title">
        <h3>Foods</h3>
      </div>
        ${generateFoodAndDrink(restaurant.menus.foods)}
      </div>
      <div class="restaurant__menus__list__drinks">
      <div class="restaurant__menus__list__drinks__title">
        <h3>Drinks</h3>
      </div>
        ${generateFoodAndDrink(restaurant.menus.drinks)}
      </div>
    </div>
  </div>
  <div class="restaurant__reviews">
    <h2>Customer Rivewer</h2>
    ${generateReview(restaurant.customerReviews)}
    <button id="addButton" class="restaurant__reviews__button">Add Review</button>
    <div class="addForm"></div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
  <div class="restaurant-item__header">
    <a href="/#/detail/${restaurant.id}">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}" src="${ENDPOINT.MEDIUM_IMAGE + restaurant.pictureId}">
    </a>
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
     <i class="fa fa-heart-o" aria-hidden="false"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="false"></i>
  </button>
`;

const createFormaddTemplate = () => `
  <div class="restaurant__reviews__form">
    <form>
      <div class="restaurant__reviews__form__row">
        <div class="restaurant__reviews__form__col-25">
          <label for="fname">Name</label>
        </div>
        <div class="restaurant__reviews__form__col-75">
          <input type="text" id="fname" name="firstname" placeholder="Your name..">
        </div>
      </div>
      <div class="restaurant__reviews__form__row">
        <div class="restaurant__reviews__form__col-25">
          <label for="subject">Riview</label>
        </div>
        <div class="restaurant__reviews__form__col-75">
          <textarea id="friview" name="subject" placeholder="Write something.."></textarea>
        </div>
      </div>
      <div class="restaurant__reviews__form__row">
        <button id="submit"> Submit </button>
      </div>
    </form>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createFormaddTemplate,
};
