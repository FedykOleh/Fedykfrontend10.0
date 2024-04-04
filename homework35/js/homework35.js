function createElement(tagName,attributes){
    let element = document.createElement(tagName)
    Object.keys(attributes || {}).forEach(key => element.setAttribute(key ,attributes[key]))
    return element
}
let wrapper = createElement('form',{
    class :'wrapper'
})

document.body.appendChild(wrapper)

let nameHolder = createElement('div',{
    class :'holder'
})
let labelforName =createElement('label',{
    
    for :'name'
})
labelforName.textContent = "Your name and surname :"

let inputName =createElement('input',{
    id :'name',
    type:'text'
})


wrapper.appendChild(nameHolder)
nameHolder.appendChild(labelforName)
nameHolder.appendChild(inputName)

let birthHolder = createElement('div',{
    class :'holder'
})
let labelforBirth =createElement('label',{
    
    for :'birth'
})
labelforBirth.textContent = "Your birthday :"

let inputBirth =createElement('input',{
    id :'birth',
    type:'text'
})


wrapper.appendChild(birthHolder)
birthHolder.appendChild(labelforBirth)
birthHolder.appendChild(inputBirth)

let genderHolder = createElement('div',{
    class :'holder'
})
let genderHolderWoman = createElement('div',{
    class :'holder'
})
let legendForGender = createElement('legend',{})
legendForGender.textContent='Choose your gender :'
let labelforGenderWoman =createElement('label',{
    
    for :'gender-woman'
})
labelforGenderWoman.textContent = "Woman"

let inputGenderWoman =createElement('input',{
    id :'gender-woman',
    name :'gender',
    type:'radio'
})
wrapper.appendChild(genderHolder)
genderHolder.appendChild(legendForGender)
genderHolder.appendChild(genderHolderWoman)
genderHolderWoman.appendChild(labelforGenderWoman)
genderHolderWoman.appendChild(inputGenderWoman)

let genderHolderMan = createElement('div',{
    class :'holder'
})
let labelforGenderMan =createElement('label',{
    
    for :'gender-man'
})
labelforGenderMan.textContent = "Man"

let inputGenderMan =createElement('input',{
    id :'gender-man',
    type:'radio',
    name:'gender'
})
genderHolder.appendChild(genderHolderMan)
genderHolderMan.appendChild(labelforGenderMan)
genderHolderMan.appendChild(inputGenderMan)

let selectHolder =createElement('div',{
    class :'holder'
})
let selectLabel =createElement('label',{
    for :'city-select'
})
selectLabel.textContent = 'Choose your city :'
selectHolder.appendChild(selectLabel)

let selectCity = createElement('select',{
    name:'select',
    id :'city-select'
})
let optionCity = createElement('option',{
    value :'Львів'
})
optionCity.textContent ='Львів'

let optionCity2 = createElement('option',{
    value :'Київ'
})
optionCity2.textContent ='Київ'
let optionCity3 = createElement('option',{
    value :'Одеса'
})
selectHolder.appendChild(selectCity)
optionCity3.textContent = 'Одеса'
selectCity.appendChild(optionCity)
selectCity.appendChild(optionCity2)
selectCity.appendChild(optionCity3)
wrapper.appendChild(selectHolder)

let adressHolder = createElement('div',{
    class :'holder'
})
let adressLabel = createElement('label',{
    for:'adress-input'
})
adressLabel.textContent = 'Enter your adress : '
let adressInput = createElement('textarea',{
    id:'adress-input',
    type:'textarea'
})
adressHolder.appendChild(adressLabel)
adressHolder.appendChild(adressInput)
wrapper.appendChild(adressHolder)

let languageHolder = createElement('div',{
    class :'holder'
})
let languageLegend = createElement('legend',{})
languageLegend.textContent='Choose your language :'
let languageEnglishHolder = createElement('div',{
    class :'holder'
})

let labelforLanguageEnglish =createElement('label',{
    class:'language-label',
    for :'language-english'
})
labelforLanguageEnglish.textContent = "English"

let inputEnglishLanguage =createElement('input',{
    id :'language-english',
    type :'checkbox',
    name :'language'
})
wrapper.appendChild(languageHolder)
languageHolder.appendChild(languageLegend)
languageHolder.appendChild(languageEnglishHolder)
languageEnglishHolder.appendChild(labelforLanguageEnglish)
languageEnglishHolder.appendChild(inputEnglishLanguage)

let languageGermanHolder = createElement('div',{
    class :'holder'
})

let labelforLanguageGerman =createElement('label',{
    class:'language-label',
    for :'language-german'
})
labelforLanguageGerman.textContent = "German"

let inputGermanLanguage =createElement('input',{
    id :'language-german',
    type :'checkbox',
    name :'language'
})
languageGermanHolder.appendChild(labelforLanguageGerman)
languageGermanHolder.appendChild(inputGermanLanguage)
languageHolder.appendChild(languageGermanHolder)

let languageUkrainianHolder = createElement('div',{
    class :'holder'
})

let labelforLanguageUkrainian =createElement('label',{
    class:'language-label',
    for :'language-Ukrainian'
})
labelforLanguageUkrainian.textContent = "Ukrainian"

let inputUkrainianLanguage =createElement('input',{
    id :'language-Ukrainian',
    type :'checkbox',
    name :'language'
})
languageUkrainianHolder.appendChild(labelforLanguageUkrainian)
languageUkrainianHolder.appendChild(inputUkrainianLanguage)
languageHolder.appendChild(languageUkrainianHolder)

buttonSave = createElement('button',{
    class :'button-save',
    type :'button'
}
)

wrapper.appendChild(buttonSave)

buttonSave.textContent = 'SAVE';
let inputNameCell = document.getElementById('name-cell')
let inputBirthCell = document.getElementById('birth-cell')
let inputGenderCell = document.getElementById('gender-cell')
let inputCityCell = document.getElementById('city-cell')
let inputAdressCell = document.getElementById('adress-cell')
let inputLanguageCell = document.getElementById('language-cell')
let arr = []
let table = document.getElementById('table')
console.log(arr)
function savedInfo(event){
    table.style.cssText = 'display :flex;border-spacing: 0 10px; font-family: ;font-weight :bold;justify-content:center ;align-items:center;height :100vh;'
    wrapper.style.cssText = 'display :none;'
    if(event.type === 'click'){
        
        inputNameCell.textContent = inputName.value 
        inputBirthCell.textContent = inputBirth.value
        if(inputGenderMan.checked){
            inputGenderCell.textContent = 'Man'
        }else if(inputGenderWoman.checked){
            inputGenderCell.textContent = 'Woman'
        }else{inputGenderCell.textContent = 'Nothing'}
        inputCityCell.textContent = selectCity.value
        inputAdressCell.textContent =adressInput.value
        if(inputGermanLanguage.checked){
            arr.push('German')
            console.log(arr)
        }
         if(inputEnglishLanguage.checked){
            arr.push('English')
        }
         if(inputUkrainianLanguage.checked){
            arr.push('Ukrainian')
        }
         if(inputGermanLanguage.checked){
            arr.push('German')
        }
       inputLanguageCell.textContent = arr.join()
    }
    
}
    buttonSave.addEventListener('click',savedInfo)
