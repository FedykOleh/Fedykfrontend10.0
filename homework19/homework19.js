function myFunc(userNumber){
   let counter = userNumber
    function sum(plusNumber ){
          counter += plusNumber
          return counter
        

    }
   
    return sum
}
let sum = myFunc(50)
console.log(sum(10))
console.log(sum(10))
console.log(sum(10))