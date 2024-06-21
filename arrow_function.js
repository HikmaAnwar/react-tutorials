// Arrow Functions Return Value by Default:
hello = () => "hello world!";

// Arrow Function With Parameters:
hello = (val) => "hello" + val;

// without parentesis 
hello = val => "hello" + val;

// With a regular function, this represents the object that called the function:
class Header{
    constructor(){
        this.color = "red";
    }
    //Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}
const myheader = new Header();
//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);




// With an arrow function, this represents the Header object no matter who called the function:
class Headerr {
    constructor() {
      this.color = "Red";
    }
  
  //Arrow function:
    changeColorr = () => {
      document.getElementById("demo").innerHTML += this;
    }
  }
  
  const myheaderr = new Header();
  
  
  //The window object calls the function:
  window.addEventListener("load", myheaderr.changeColor);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", myheaderr.changeColor);