
class Hamburger{
    constructor(burgerSize ,burgerMainTopping){
        this.burgerSize = burgerSize
        this.burgerMainTopping = burgerMainTopping
        this.toppings = []
    }
    static SIZE_SMALL ={
        calories :20,
        price : 50 
    }
    static SIZE_LARGE ={
        calories :40,
        price : 100 
    }
    static STUFFING_CHEESE ={
        calories :20,
        price : 10 
    }
    static STUFFING_SALAD ={
        calories :20,
        price : 5
    }
    static STUFFING_CHEESE ={
        calories :20,
        price : 10 
    }
    static STUFFING_POTATO ={
        calories :10,
        price : 15
    }
    static TOPPING_SAUCE ={
        calories :0,
        price : 15
    }
    static TOPPING_MAYO ={
        calories :20,
        price : 10 
    }
    addTopping(topp){
        this.toppings.push(topp)
        // this.toppings.push(topp)
    }
    calculatePrice(){
        let arr = [this.burgerSize.price ,this.burgerMainTopping.price]
        this.toppings.map(elem => arr.push(elem.price))
        return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
       
       

}
    calculate(){
        let arr = [this.burgerSize.calories ,this.burgerMainTopping.calories]
        this.toppings.map(elem => arr.push(elem.calories))
        return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
       
       

}}

var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate ());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());