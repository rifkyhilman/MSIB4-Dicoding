import { createFormaddTemplate } from '../views/templates/template-creator';
import RestaurantDbSource from '../data/restaurantdb-source';

function test(id) {
  const addButton = document.querySelector('#addButton');
  const formPost = document.querySelector('.addForm');
  addButton.addEventListener('click', () => {
    formPost.innerHTML = createFormaddTemplate();
    const submits = document.querySelector('#submit');
    submits.addEventListener('click', () => {
      const nama = document.getElementById('fname').value;
      const riview = document.getElementById('friview').value;
      const data = {
        id: `${id}`,
        name: `${nama}`,
        review: `${riview}`,
      };
      RestaurantDbSource.addReviewRestaurant(data);
    });
  });
}

export default test;
