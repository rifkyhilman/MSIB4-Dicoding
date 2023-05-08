function generateReview(arr) {
  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    res += `
    <div class="restaurant__reviews-card">
    <h4>${arr[i].name}</h4>
    <p>${arr[i].review}</p>
    <p> Date of rivew: ${arr[i].date}</p>
    </div>`;
  }
  return `<div>${res}</div>`;
}

function generateFoodAndDrink(arr) {
  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    res += `<li>${arr[i].name}</li>`;
  }
  return `<ul>${res}</ul>`;
}

export { generateReview, generateFoodAndDrink };
