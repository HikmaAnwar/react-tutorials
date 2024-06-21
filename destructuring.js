// With destructuring:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;




// if we want only car and suv

const vehicles1 = ['mustang', 'f-150', 'expedition'];

const [car1,, suv1] = vehicles;




// Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);



// destructuring in function using object
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}





// destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:
const vehicleTwo = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleTwo)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}