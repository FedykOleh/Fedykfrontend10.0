class Human{
    constructor(options){
        this.name = options.name
        this.gender= options.gender
    }
}
const mary = new Human({
    name: 'mary',
    gender :"W",
})

const john = new Human({
    name: 'john',
    gender :"M",
})

const ricardo = new Human({
    name: 'ricardo',
    gender :"M",
})
const mike = new Human({
    name: 'mike',
    gender :"M",
})
const lucy = new Human({
    name: 'lucy',
    gender :"W",
})
const joe = new Human({
    name: 'joe',
    gender :'M',
})
const lily = new Human({
    name: 'lily',
    gender :'W',
})

class Flat{
 arr = [] 
 addInhabitant (inhabitant){
    this.arr.push(inhabitant)
 }
 getArr(){
    return this.arr
 }

}
const flat = new Flat({})
flat.addInhabitant(john) 
flat.addInhabitant(mary) 
const flat2 = new Flat({})
flat2.addInhabitant(ricardo) 
flat2.addInhabitant(mike) 
const flat3 = new Flat({})
flat3.addInhabitant(lucy) 
flat3.addInhabitant(joe) 
const flat4 = new Flat({})
flat4.addInhabitant(lily) 

class House{
    constructor(options){
        this.maxFlatCounter =options.maxFlatCounter
    }
flatArr =[]
addFlat(flatName){
    this.flatArr.push(flatName)
    if(this.flatArr.length > this.maxFlatCounter){
        console.log(`There is no empty flats `) }
     
    return this.flatArr 
}
}
let house = new House({})
house.maxFlatCounter = 3
house.addFlat(flat)
house.addFlat(flat2)
house.addFlat(flat3)
// house.addFlat(flat4)
// console.log(house)