
const filmCategoriesComedy = document.getElementById('comedy');
const filmCategoriesOscar = document.getElementById('oscar');
const filmCategoriesCartoon = document.getElementById('cartoon');

let categoriesFilmProposition = Array.from(document.getElementsByClassName('categories-film-proposition'));

function filmCategoriesVisibility(event) {
   let  target = event.target
    if (event.type === 'click' && filmCategoriesComedy === target ) {
        let first = filmCategoriesComedy.firstElementChild
        
        first.style.cssText = 'display:flex;';
    } else if(event.type === 'click' && filmCategoriesComedy !== target ) {
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
    


addEventListener('click', filmCategoriesVisibility);
categoriesFilmProposition.forEach(elem => {
    elem.addEventListener('mouseout', filmCategoriesVisibility);
});



let informationButtons = Array.from(document.getElementsByClassName('more-information-button'))
let divHolder = document.getElementsByClassName('btn-holder')
let moreInformationElemnets = Array.from(document.getElementsByClassName('information-p'))
let categoriesFilmItem = Array.from(document.getElementsByClassName('categories-film-item'))


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



// ______________Для ДЗ 32_________________________________________________________________

buyButtons = Array.from(document.getElementsByClassName('buy-button'))
function toBuy (event){
    let target = event.target 
    if((event.type === 'click') && (buyButtons.includes(target))){
        categoriesFilmProposition.forEach(elem => elem.style.cssText = 'display :none ;')
    }
}
addEventListener('click', toBuy)

// _______________________________Для дз 34_________

// buyButtons = Array.from(document.getElementsByClassName('buy-button'))
// const aside = document.getElementById('aside')
// const form = document.getElementById('form')
// let orderButton = document.getElementById('order-button')
// console.log(aside)
// function toBuy (event){
//     let target = event.target 
//     if((event.type === 'click') && (buyButtons.includes(target))){
//         aside.style.cssText = 'display:none ;'
//         form.style.cssText = 'display:flex ;'

//     }
// }
// addEventListener('click', toBuy)

// function toOrder(event){
//     eve
// }
