console.log('1.Вивести на сторінку в один рядок через кому числа від 10 до 20.')
for(let i = 10 ; i <= 20 ;++i){
    console.log(i,'i')
};

console.log('2.Вивести квадрати чисел від 10 до 20.');
for(let i = 10 ; i <= 20 ; ++i){
    square = i * i
    console.log(i +'² = '+ square)
};
console.log('3.Вивести таблицю множення на 7.');
for(let i = 1 , mult = 1 ; mult <= 9 ; ++i){

    if(i === 9){
    mult = mult + 1
    i = 1
    console.log('Множення на ' + mult)
}
result = i * mult
console.log(i + ' * '+ mult + ' = '+result)
};
console.log('4.Знайти суму всіх цілих чисел від 1 до 15.');
for(let i = 0 ,sum = 0,average = 0;i <=15 ; ++i){
    sum += i
    if(i == 15){
        average = sum / i
        console.log('Сума всіх цілих чисел від 1 до 15 = '+ average )
    }
    
};
console.log('5.Знайти добуток усіх цілих чисел від 15 до 35.');
for(let i = 15 , product = 1 ; i <= 35 ; ++i){
    product *= i 
    console.log(product ,'product')
};
console.log('6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
for(let i = 1 ,max = 500 , average = 0 , sum = 0;i <= max ;++i ){
    sum += i
   if(i == 500){
    average = sum / max
    console.log(  '6.Середнє арифметичне всіх цілих чисел від 1 до 500 = '+ average)
   }
    
};
console.log('7.Вивести суму лише парних чисел в діапазоні від 30 до 80.')
for(let i = 30 ,sum = 0 ;i <= 80 ; ++i){
    if(!(i % 2)){
        sum += i
        console.log('Сума тільки парних чисел = ' + sum )
    }
};
console.log('8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.')
for(let i = 100 ; i <= 200 ; ++i){
    if(!(i % 3)){
        console.log(i + ' є кратним 3')
    }
}
console.log('9.Вивести всі числа в діапазоні від 100 до 200 кратні 3.')
userNumber = +prompt('Enter your number for task # 9')
for(let i = 0,divisor = 0, evenDivisor = 0, sumEvenDivisor = 0, counter = 0; i <= userNumber ; ++i){
    if(userNumber % i === 0 ){
        divisor = i 
        console.log(`${divisor} є дільником числа ${userNumber}`)
        if(divisor % 2 === 0){
            ++counter
            sumEvenDivisor += divisor
            console.log(`10.Парних дільників є ${counter} 11. ${sumEvenDivisor} є сумою парних дільником`)
            
        }
    }
}
console.log('12.Надрукувати повну таблицю множення від 1 до 10.')
for(let i = 1 , mult = 1 ; mult <= 10 ; i++){
    if(i >= 11){
        i = 1
        ++mult
        console.log(`Множення на ${mult}`)
    }
    table = i * mult
    console.log(`${i} * ${mult} = ${table}`)
}