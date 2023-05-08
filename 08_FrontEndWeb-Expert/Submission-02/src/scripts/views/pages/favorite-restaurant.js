import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
    <section class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">For the love of delicious food</h1>
            <p class="hero__tagline">Come with family & feel the joy of mouthwartering food</p>
        </div>
    </section>
    <section id= "content" class="restaurants">
        <div class="restaurants__content">
            <h1 class="restaurants__content__label">Favorite Restaurant</h1>
            <div id="restaurants__list"></div>
        </div>
    </section>
          `;
  },

  async afterRender() {
    let view = `
    <div class="loader">
      <div class="loader__icon"></div>
    </div>`;
    let item = '';
    const restaurantContainer = document.querySelector('#restaurants__list');
    restaurantContainer.innerHTML = view;
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      restaurants.forEach((restaurant) => {
        item += createRestaurantItemTemplate(restaurant);
      });
      view = `<div id="restaurants" class="restaurants__list__item">${item}</div>`;
      restaurantContainer.innerHTML = view;
    } catch (error) {
      view = `
      <div class="error">
      <div class="error__text">
          <h1>400</h1> 
          <p>Bad Request</p>
        </div>
        </div>`;
      restaurantContainer.innerHTML = view;
    }
  },
};

export default FavoriteRestaurant;
