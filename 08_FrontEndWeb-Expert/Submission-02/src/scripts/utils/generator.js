function generateReview(arr) {
  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    res += `<p>${arr[i].date}</p>
      <p>${arr[i].name}</p>
      <p>${arr[i].review}</p>`;
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
