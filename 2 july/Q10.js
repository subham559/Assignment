
//  Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`

function groupByType(arr){
let a={}
  for(let i of arr){
if(a.hasOwnProperty(typeof i)){
    a[typeof i].push(i)
}
else{
    a[typeof i] =[i]
}}
console.log(a);}

groupByType([1,'a' , true, 2, 'b']);

