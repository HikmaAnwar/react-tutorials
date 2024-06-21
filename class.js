class Car{
    constructor(name){
        this.brand = name;
    }
    present(){
        return 'I have a' + this.brand;
    }

}

class Model extends Car{
    constructor(name, mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.present() + ', its a ' + this.model
    }

}
const mycar = new Model("Ford", "mustang");
mycar.show();

