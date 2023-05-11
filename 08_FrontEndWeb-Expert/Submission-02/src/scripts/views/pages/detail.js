import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import test from '../../utils/add-button';

const Detail = {
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
            <h1 class="restaurants__content__label">Detail of Restaurant</h1>
            <div id="likeButtonContainer" class="likeBtn"></div>
            <div id="restaurant" class="restaurant"></div>
        </div>
    </section>
        `;
  },

  async afterRender() {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    const restaurantContainer = document.querySelector('#restaurant');
    let view = `
    <div class="loader">
      <div class="loader__icon"></div>
    </div>`;
    restaurantContainer.innerHTML = view;
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      // const data = {
      //   id: `${url.id}`,
      //   name: 'Dinosaurus',
      //   review: 'Wow mantap',
      // };
      const restaurants = await RestaurantDbSource.detailRestaurant(url.id);
      // const testaja = await RestaurantDbSource.addReviewRestaurant(data);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurants.id,
          name: restaurants.name,
          city: restaurants.city,
          pictureId: restaurants.pictureId,
          rating: restaurants.rating,
          description: restaurants.description,
        },
      });
      view = createRestaurantDetailTemplate(restaurants);
      likeButtonContainer.innerHTML = createLikeButtonTemplate();
      restaurantContainer.innerHTML = view;
      test(url.id);
      // console.log(testaja);
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

export default Detail;
