class Human{
    constructor(options){
        this.name =options.name
        this.age =options.age

    }
     humanInfo(){
        console.log(`Інформація про власника:
       Ім'я - ${this.name}
        Вік - ${this.age}`)
     }
    
}
let mike = new Human(
    {name :'mike',
    age  :27}
)
let jane = new Human(
    {name :'jane',
    age  :13}
)
let leo = new Human(
    {name :'leo',
    age  :17}
)
let manny = new Human(
    {name :'manny',
    age  :56}
)
class Auto{
    constructor(options){
        this.autoBrand =options.autoBrand
        this.autoModel = options.autoModel
        this.autoGradYear =options.autoGradYear
        this.autoRoadNumber = options.autoRoadNumber
    }
    ownerIs(owner){
        if(owner.age >18){
            return this.owner = owner
        }  else if(owner.age <18){
            this.owner != owner
            return console.log(`${owner.name} is too young for a car`)}}
   getInfo(){
        console.log(`
        Бренд авто -${this.autoBrand }
        Модель авто- ${this.autoModel }
        Рік випуску -  ${this.autoGradYear} 
        Дорожній номер-${this.autoRoadNumber}
        `) 
        this.owner.humanInfo()
  
   }
}
let toyota = new Auto({
    autoBrand :'Toyota',
    autoModel :'Supra',
    autoGradYear:'1997',
    autoRoadNumber :2456
})
toyota.ownerIs(mike)
toyota.getInfo();
let mercedes = new Auto({
    autoBrand :'Mercedes',
    autoModel :'SL 600',
    autoGradYear:'2007',
    autoRoadNumber :1434
})
mercedes.ownerIs(manny)
mercedes.getInfo()

