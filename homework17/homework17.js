console.log('1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.')
arr = [1 , 'Mike',9 ,undefined,NaN,'John',12,3,5,20];
newArr = arr.filter(elem => !isNaN(elem)  )
total = parseInt((newArr.reduce((accum,current) => accum + current)) / newArr.length)
console.log(` Середніми арифметичним чисел :${newArr} ,Є ${total}`)
console.log('2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.')
inputA = +prompt('a')
znak = prompt('znak')
inputB= +prompt('b')
function doMath(a ,znak,b){
    switch(znak){
    case  '+':
        result = a + b
        break
    case  '-':
        result = a - b
        break
    case  '*':
        result = a * b 
        break
    case  '/':
        result = a / b
        break
    case  '%':
        result = a % b
        break
    case  '^':
         result = a ^ b
         break
}
 return result
}
resultDoMath = doMath(inputA,znak,inputB)
// Довго грався з цим ,бо думав що тут є оптимізованіший шлях ніж умовні конструкції.Гугли ,нічого не знайшов
// якщо він є то розкажіть )
console.log(resultDoMath)


console.log('3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.')

function dimenArr(){

let mainUserArr = []
let howLong = +prompt('Enter legnth')

let enterNumber = 3

for(let i = 0 ;i < howLong ;i++ ){
    mainUserArr[i] = []
    for(let j = 0 ;j < howLong  ;j++){
        mainUserArr[i][j] = prompt('Enter value ')
        
    }
}
return mainUserArr
}
let arrOne = dimenArr()
console.log(arrOne)


console.log('4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. " hello world" 1 d поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.')
function deleteSymbol(sentence ,symbol,secondSymbol ){
     sentence = prompt('Enter String ')
     symbol = prompt('Enter symbol youwant to delete ')
    let tempArr = [sentence]
    temp = tempArr.join('-').split(symbol).join(' ')
    return temp
}
console.log(deleteSymbol())
// Щось тут друге значення ,не вдалось мені задати, з самого початку мабуть пішов не тим шляхом
