let input = Array.from(document.getElementsByTagName("input")) ;
let p = Array.from(document.getElementsByTagName('p'))
let divVisibilityFocus = function (){
 p[0].style.display ='block'

}
let divVisibilityBlur = function (){
 p[0].style.display ='none'

}
input[0].addEventListener('focus',divVisibilityFocus)
input[0].addEventListener('blur',divVisibilityBlur)
