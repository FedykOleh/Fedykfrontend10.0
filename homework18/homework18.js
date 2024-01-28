inputNumber = +prompt('Enter number')
inputDegree = +prompt('Enter degree')
function pow(num, degree) {
   
    if (degree === 0) {
        return 1; 
    } else if (degree=== 1) {
        return num; 
    }  else {
        return num * pow(num, degree - 1);
    }
}
console.log(pow(inputNumber ,inputDegree))