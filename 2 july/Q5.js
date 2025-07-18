
// **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`

let str='aabbbc';
function Frequency(str){
    let a=[];
    for(let i of str.split('')){
        if(a.hasOwnProperty(i)){
            a[i]++;
        }
        else{
            a[i]=1;
        }
    }
    return a;
}
console.log(Frequency(str));

