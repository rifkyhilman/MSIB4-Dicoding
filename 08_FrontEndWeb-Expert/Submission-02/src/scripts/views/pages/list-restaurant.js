import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
            <section class="hero">
                <div class="hero__inner">
                    <h1 class="hero__title">For the love of delicious food</h1>
                    <p class="hero__tagline">Come with family & feel the joy of mouthwartering food</p>
                </div>
            </section>
            <section id= "content" class="content">
                <div class="latest">
                    <h1 class="latest__label">Explore Restaurant</h1>
                    <div class="posts"></div>
                </div>
            </section>
          `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
