const coffeeStock = {
    arabica: 100,
    "robusta": 150,
    "el liberica": 200
  }

  const makeCoffee = (Kopi, miligrams) => {
    if (coffeeStock[Kopi] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
    makeCoffee("arabica", 50);



export {coffeeStock};