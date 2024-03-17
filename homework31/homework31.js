divHolder = document.createElement('div')
divHolder.style.cssText = 'display:flex ; justify-content:center;align-items:center;height:100 vh;gap:20px'

document.body.appendChild(divHolder)

prevButton = document.createElement('button')
pictureContainer = document.createElement('div')
nextButton = document.createElement('button')
pictureContainer= document.createElement('img')
pictureContainer.style.cssText = 'width:300px;height:400px'

prevButton.textContent = 'Previous'
nextButton.textContent = 'Next'

// prevButton.style.cssText  = 'align-self:end;background:yellow; width:100px;border-radius:5px '
// nextButton.style.cssText  = 'align-self:end;background:yellow; width:100px;border-radius:5px '

divHolder.appendChild(prevButton)
divHolder.appendChild(pictureContainer)
divHolder.appendChild(nextButton)
let picArr = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg',]
let counter = 4
pictureContainer.setAttribute('src',`homework31/images/${picArr[counter]}`) 
function nextPage(event){
    
   if( event.type ==='click'){
    picArr[counter++]
    pictureContainer.setAttribute('src',`homework31/images/${picArr[counter]}`)
    if (counter === picArr.length -1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
   
    
console.log(picArr[counter]) }
}
    
function prevPage(event){
     ;
   if( event.type ==='click'){
    picArr[counter--] 
    pictureContainer.setAttribute('src',`homework31/images/${picArr[counter]}`) 
    }
    if (counter === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }
 
}
nextButton.addEventListener('click',nextPage)
prevButton.addEventListener('click',prevPage)
pictureContainer.setAttribute('src',`homework31/images/${picArr[counter]}`) 
