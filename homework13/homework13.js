
console.log('1.Дан масив [16, -37 ,54 ,-4 ,72 , -56 ,  47 ,4, -16 , 25 , -37 , 46 , 4 , -51 , 27 , -63 , 4 , -54 , 76 , -4 , 12 , -35 , 4 , 47 ] Знайти суму та кількість позитивних елементів.')
arr = [16 ,-37 , 54 , -4 ,72 ,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
for (let i = 0 ,sum = 0;i< arr.length ;i++){
    if (arr[i] > 0){
        sum += arr[i]
        console.log(sum)
    }
}
console.log('2.Знайти мінімальний елемент масиву та його порядковий номер.')
for(let i = 0 ,min = arr[0],minIndex =0 ;i < arr.length ; i++){
    if(arr[i]< min){
        min = arr[i]
        minIndex = i
        console.log(min,'min')
        console.log(minIndex,'minIndex')
    }
    
}
console.log('3.Знайти максимальний елемент масиву та його порядковий номер.')
for(let i = 0 ,max = arr[0],maxIndex = 0 ;i < arr.length ; i++){
    if(arr[i]> max){
        max = arr[i]
        maxIndex= i
        console.log(max,'max')
        console.log(maxIndex,'minIndex')
    }
}
console.log('4.Визначити кількість негативних елементів.')
for(let i = 0,counter = 0 ;i < arr.length ; i++){
    if(arr[i] < 0 ){
        counter++
        console.log(counter,' негативних елементів')    }
}console.log('5.Знайти кількість непарних позитивних елементів.')
for (i = 0, counter = 0; i <arr.length ;i++){
    if((arr[i] > 0) && (arr[i] % 2 !==0)){
        ++counter
        console.log(counter)
    }
}
console.log('6.Знайти кількість парних позитивних елементів.')
for (i = 0, counter = 0; i <arr.length ;i++){
    if((arr[i] > 0) && (arr[i] % 2 ===0)){
        ++counter
        console.log(counter)
    }
}
console.log('7.Знайти суму парних позитивних елементів.')
for (i = 0, sumEven = 0; i <arr.length ;i++){
    if((arr[i] > 0) && (arr[i] % 2 ===0)){
        sumEven +=arr[i]
        console.log(sumEven,'sumEven')
    }
}
console.log('8.Знайти суму непарних позитивних елементів.')
for (i = 0, sumOdd = 0; i <arr.length ;i++){
    if((arr[i] > 0) && (arr[i] % 2 !==0)){
        sumOdd +=arr[i]
        console.log(sumOdd)
    }
}
console.log('9.Знайти добуток позитивних елементів.')
for (i = 0, productPosElements = 1; i <arr.length ;i++){
    if((arr[i] > 0) && (arr[i] % 2 ===0)){
        productPosElements *= arr[i]
        console.log(productPosElements,'productPosElements')
    }
}
console.log('10.Знайти найбільший серед елементів масиву, ост альні обнулити.')

let maxElement = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxElement) {
        arr[i] = 0;
    }
}
console.log(arr);
    


