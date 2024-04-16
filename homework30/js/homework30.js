let categoriesList =document.getElementById('categories-list')
const filmCategoriesComedy = document.getElementById('comedy');
const filmCategoriesOscar = document.getElementById('oscar');
const filmCategoriesCartoon = document.getElementById('cartoon');

let informationButtons = Array.from(document.getElementsByClassName('more-information-button'))
let divHolder = document.getElementsByClassName('btn-holder')
let moreInformationElemnets = Array.from(document.getElementsByClassName('information-p'))
let categoriesFilmItem = Array.from(document.getElementsByClassName('categories-film-item'))

let categoriesFilmProposition = Array.from(document.getElementsByClassName('categories-film-proposition'));

function filmCategoriesVisibility(event) {
   let  target = event.target
    if (event.type === 'click' && filmCategoriesComedy === target ) {
        let first = filmCategoriesComedy.firstElementChild
        
        first.style.cssText = 'display:flex;';
    } else if(event.type === 'click' && filmCategoriesComedy !== target  ) {
        let first = filmCategoriesComedy.firstElementChild
        
        first.style.cssText = 'display:none;';
    }
    if (event.type === 'click' && filmCategoriesOscar === target ) {
        let first = filmCategoriesOscar.firstElementChild
        
        first.style.cssText = 'display:flex;';
       }else if(event.type === 'click' && filmCategoriesOscar !== target ) {
        let first = filmCategoriesOscar.firstElementChild
        
        first.style.cssText = 'display:none;';
    }
    if (event.type === 'click' && filmCategoriesCartoon === target ) {
        let first = filmCategoriesCartoon.firstElementChild
        
        first.style.cssText = 'display:flex;';
       }else if(event.type === 'click' && (filmCategoriesCartoon !== target) ) {
        let first = filmCategoriesCartoon.firstElementChild
        
        first.style.cssText = 'display:none;';
    }

    }
    


categoriesList.addEventListener('click', filmCategoriesVisibility);

function showInformation(event){
    let target = event.target
    let parent = target.parentElement
    let next =parent.nextElementSibling
    let parentLi = parent.parentElement
    let parentUl =parentLi.parentElement
    if((event.type ==='click') && ( informationButtons.includes(target))){
    next.style.cssText = 'display:flex;'
    parentUl.style.cssText = 'display:flex; '
    parentLi.style.cssText = 'width :300px;transition: 0.5s;'
    }

}

addEventListener('click',showInformation)

buyButtons = Array.from(document.getElementsByClassName('buy-button'))
const aside = document.getElementById('aside')
const form = document.getElementById('form')
let orderButton = document.getElementById('order-button')
let choosenMovie = undefined ;
console.log(aside)
function toBuy (event){
    let target = event.target 
    if((event.type === 'click') && (buyButtons.includes(target))){
        aside.style.cssText = 'display:none ;'
        form.style.cssText = 'display:flex ;'
        choosenMovie = target.previousElementSibling.textContent
        console.log(choosenMovie)

    }
}
addEventListener('click', toBuy)

let inputName = document.getElementById('name-input')
let inputCity = document.getElementById('city-select')
let inputAdress = document.getElementById('adress-input')
let inputCashPay = document.getElementById('cash')
let inputCardPay = document.getElementById('card')
let inputCount = document.getElementById('how-much')
let inputComment = document.getElementById('comment-input')

let inputNameCell = document.getElementById('name-cell')
let inputCityCell = document.getElementById('city-cell')
let inputAdressCell = document.getElementById('adress-cell')
let inputPayCell = document.getElementById('pay-cell')
let inputCountCell = document.getElementById('count-cell')
let inputCommentCell = document.getElementById('comment-cell')
let choosenFilmCell = document.getElementById('choosen-film-cell')

let table = document.getElementById('table')

function toOrder(){
    if((inputName.value !== '')&&( inputCity.value !== '')&&(inputAdress.value!=='') &&(inputCount.value !== '')&&((inputCashPay.checked)||(inputCardPay.checked))&&(inputComment.value!=='')){
        inputNameCell.textContent = inputName.value
        inputCityCell.textContent = inputCity.value
        inputAdressCell.textContent = inputAdress.value
        if(inputCashPay.checked){
            inputPayCell.textContent = "Cash"
            
        }else if(inputCardPay.checked) {
            inputPayCell.textContent = "Card"
            
        }else{
            inputPayCell.textContent = ''
        }
        inputCountCell.textContent = inputCount.value
        inputCommentCell.textContent = inputComment.value
        choosenFilmCell.textContent = choosenMovie
        form.style.cssText = 'display:none;'
        table.style.cssText = 'display: flex;'
    }else{
        alert('You have empty fields')
    }}
    
let confirmButton = document.getElementById('order-button')
confirmButton.addEventListener('click',toOrder)
