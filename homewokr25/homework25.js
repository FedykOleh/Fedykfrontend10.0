class SuperMath  {
   constructor(x ,znak ,y){ 
    x = this.x,
    znak = this.znak,
    y = this.y }
    input(){
        this.x = + prompt('Тоді ведіть нові значення:X = ?'),
        this.y = + prompt('Y = ?'),
        this.znak = prompt('znak = ?')
        switch (this.znak){
            case '+':
                console.log(`${this.x} + ${this.y} = ${this.x + this.y}`)
                break
            case '/':
                console.log(`${this.x} / ${this.y} = ${this.x / this.y}`)
                break
            case '-':
                console.log(`${this.x} - ${this.y} = ${this.x - this.y}`)
                break
            case '%':
                console.log(`${this.x} % ${this.y} = ${this.x % this.y}`)
                break
            case '*':
                console.log(`${this.x} * ${this.y} = ${this.x * this.y}`)
                break
            }
        
    }   
    check(obj){ 
    let checkQuestion =confirm(`Ви хочете зробити дію ${obj.znak} де x = ${obj.x} a y = ${obj.y}`)
    if (checkQuestion === false){

        this.input()
    }else{
        console.log(`${obj.x} ${obj.znak} ${obj.y} = ${Number(obj.x / obj.y)}`)
    }
    }    
    
    }
    
obj= {
    x : 5 ,
    znak : '/',
    y : 5,
}
p = new SuperMath()
p.check(obj)