class Student {
    constructor(options,){
        this.name = options.name
        this.lastName = options.lastName
        this.birthYear = options.birthYear
        this.marks = [...options.marks]
        this.vistation =new Array(25)
    }
    getStudentAge(){
       let currentDate = new Date().getFullYear()
       return currentDate - this.birthYear
    }
    getAverageMarks (){
        let sum = 0
        let result = 0
        for(let i = 0;i<this.marks.length;i++){
        sum += this.marks[i]
       result = sum /this.marks.length 
     }
       
       return result
    } 
    present(){
        for(let i =0 ;i<this.vistation.length;i++){
            if(this.vistation[i] === undefined){
                this.vistation[i] = true
                break
            }
        }
    }
    absent(){
        for(let i =0 ;i<this.vistation.length;i++){
            if(this.vistation[i] === undefined){
                this.vistation[i] = false
                break
             }
       
         }   
    }
    calculateVistation() {
        const presentCount = this.vistation.filter(value => value === true).length;
        return presentCount / this.vistation.length;
    }
    summary(){
        const vistationRate = this.calculateVistation()
        const marksRate = this.getAverageMarks()
        if(marksRate> 90 && vistationRate > 0.9){
            return alert('Молодець!')
        }else if(marksRate < 89 || vistationRate < 0.89){
            return alert('Добре, але можна краще')
        }else{
            return alert('Редиска!')
        }
    }
}

let mike = new Student({
    name: 'mike',
    lastName :'biden',
    birthYear : 1996,
    marks :[85,94,88,100,95,98]})
console.log(mike)
console.log(`Вік студента :${mike.getStudentAge()}`)
console.log(`Середня оцінка студенка : ${mike.getAverageMarks()}`)
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
mike.present()
console.log(mike.calculateVistation())
// mike.summary()

// ************************
let john = new Student({
    name : 'jonh',
    lastName :'Trump',
    birthYear:1982,
    marks:[70,80,60,30,10,20,60,80,46,80,55]
})
console.log(john)
console.log(`Вік студента :${john.getStudentAge()}`)
console.log(`Середня оцінка студенка : ${john.getAverageMarks()}`)
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()

// john.summary()

// ****************************
let leo = new Student({
    name: 'leo',
    lastName :'twist',
    birthYear : 1970,
    marks :[1,2,3,4,5,6,8,9,6,8]})
console.log(leo)
console.log(`Вік студента :${leo.getStudentAge()}`)
console.log(`Середня оцінка : ${leo.getAverageMarks()}`)
leo.absent()
leo.absent()
leo.absent()
leo.absent()
leo.absent()
leo.absent()
leo.absent()
leo.absent()
leo.absent()
leo.absent()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()
leo.present()

// leo.summary()
console.log(leo.calculateVistation())