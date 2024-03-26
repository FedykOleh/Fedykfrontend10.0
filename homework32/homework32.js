function generateList(array){
    const ulList =document.createElement('ul') ;
    
    array.forEach( elem=>{
        const li =document.createElement('li')
        if(Array.isArray(elem)){
            li.appendChild(generateList(elem))
            }else{
                li.textContent = elem
            }
            ulList.appendChild(li)
        })
     return document.body.appendChild(ulList) 
          
}
arr =[1,2,[1.1,1.2,1.3],3]
generateList(arr)

