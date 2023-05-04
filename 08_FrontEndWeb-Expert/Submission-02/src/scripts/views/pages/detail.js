import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
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
            <h1 class="latest__label">Detail of Restaurant</h1>
            <div id="restaurant-detail" class="restaurant-detail"></div>
        </div>
    </section>
        `;
  },

  async afterRender() {
    let view = '<h1>loading...</h1>';
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = view;
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurants = await RestaurantDbSource.detailRestaurant(url.id);
      view = createRestaurantDetailTemplate(restaurants);
      restaurantContainer.innerHTML = view;
    } catch (error) {
      view = '<h1>Err</h1>';
      restaurantContainer.innerHTML = view;
    }
  },
};

export default Detail;
