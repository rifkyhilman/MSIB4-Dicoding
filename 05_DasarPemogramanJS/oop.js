// class adalah penulisan sebuah constructor function pada ES6
class Car {

    // constructor adalah sebuah method / fungsi yang akan di eksekusi pertamakali oleh class
    constructor(brand, color, maxSpeed, chassisNumber) {
    
    // this. adalah suatu nilai atau properti pada method  
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;

    }
    
    // di bawah ini adalah method dengan nama drive
    drive() {
      return console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn() {
      console.log(`${this.brand} ${this.color} is turning`);
    }
  };
   
  // Membuat objek mobil dengan constructor function Car
  const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
   
  console.log(car1);
  console.log(car2);
  console.log(car3);
   
  car1.drive();
  car2.turn();
  car3.drive();

  export {Car};