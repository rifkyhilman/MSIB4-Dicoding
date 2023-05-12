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
    <h2>Menu</h2>
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
    <div id="restaurant__reviews__content">
      ${generateReview(restaurant.customerReviews)}
    </div>
    <button id="addButton" class="restaurant__reviews__button">Add Review</button>
    <div class="addForm"></div>
    <dialog id="myDialog">
      <button id="closeDialog">X</button>
      This is a dialog window
    </dialog>
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
  <button aria-label="favorite this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="false"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unfavorite this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="false"></i>
  </button>
`;

const createFormTemplate = () => `
  <div class="restaurant__reviews__form">
    <form id="form-review">
      <div class="restaurant__reviews__form__row">
        <div class="restaurant__reviews__form__col-25">
          <label for="fname">Name</label>
        </div>
        <div class="restaurant__reviews__form__col-75">
          <input type="text" id="fname" name="firstname" placeholder="Your name.." autofocus required minlength="2">
        </div>
      </div>
      <div class="restaurant__reviews__form__row">
        <div class="restaurant__reviews__form__col-25">
          <label for="subject">Riview</label>
        </div>
        <div class="restaurant__reviews__form__col-75">
          <textarea id="freview" name="subject" placeholder="Write something.." required></textarea>
        </div>
      </div>
      <div class="restaurant__reviews__form__row">
        <button type="reset" id="submit" class="restaurant__reviews__form__button" > Submit </button>
      </div>
    </form>
  </div>
`;

const createLoadingTemplate = () => `
<div class="loader">
  <div class="loader__icon"></div>
</div>
`;

const createErrorTemplate = () => `
  <div class="error">
    <div class="error__text">
        <h1>400</h1> 
        <p>Bad Request</p>
    </div>
  </div>
  `;

const createZeroRestaurantTemplate = () => `
  <div class="undefined">
    <h1> There is no favorite restaurant yet </h1>
    <p> let's add your favorite restaurant </p>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createFormTemplate,
  createLoadingTemplate,
  createErrorTemplate,
  createZeroRestaurantTemplate,
};
