import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <app-bar></app-bar>
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
      const restaurants = await RestaurantDbSource.listRestaurant();
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

export default ListRestaurant;
