let arr = [] ;
inputUser = +prompt('Enter letngth of arr')
arr.length = inputUser
console.log(arr.length ,'arr.length')
for(let i =0 ;i < arr.length ; i++){
    arr[i] = +prompt('Enter element if arr')
}
arr.sort(function(a, b) {
	if (a > b) {
		return 1;
	} else {
		return -1;
	}
});
console.log(arr, 'arr')
newArr = arr.splice(2,3)
console.log(newArr ,'newArr')
console.log(arr ,'arr')