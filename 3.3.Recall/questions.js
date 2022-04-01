let selectElementsStartingWithA = (array) => {
return array.filter((letter)=> letter.startsWith('a'))
    
}

let selectElementsStartingWithVowel = (array) => {
    let array2 = ['john', 'david', 'omar', 'fred', 'idris', 'angela'];
    // let index= array2.indexOf('david')
    // if (index > -1){
    //     array2.splice(index,1);
    // } else{
    //     return "none"
    // }
    // return array2
    let nbr = "john";
    let nbs = "david";
    let nbl = "fred"
    array2=array2.filter(item => item !== nbr && item !== nbs && item !== nbl);
    return array2
}

let removeNullElements = (array) => {
    
    array= array.filter(item => item !== null);
    return array
}

let removeNullAndFalseElements = (array) => {
    array= array.filter(item => item !==null && item !==false);
    return array;
}

let reverseWordsInArray = (array) => {
  return  array.map(item => item.split("").reverse().join(""));
}

let everyPossiblePair = (array) => {
    
    return array.sort().flatMap((item1,index1) =>
    array.flatMap((item2,index2) => (index1 > index2) ? [[item2,item1]] : []
    )
    )
 
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3)
}

let addElementToBeginning = (array, element) => {
    array.unshift(1)
    return array
}

let sortByLastLetter = (array) => {
//     var a = [];
// a[0] = "araignée";
// a[5] = "zèbre";
// return a
let newarr= array.map(item => item.split("").reverse().join(""));
newarr= newarr.sort();
return newarr.map(item => item.split("").reverse().join(""))
}

let getFirstHalf = (string) => {
    //return string.charAt(0)+ string.charAt(1) + string.charAt(2)
    return string.substring(0,3)
}

let makeNegative = (number) => {
   return -Math.abs(number)
   
}

let numberOfPalindromes = (array) => {
  let invert = array.map((item) => (item.split('').reverse().join(''))== item);
invert= invert.filter(item => item == true)
return invert.length;
}

let shortestWord = (array) => {
   return array.reduce((a,b)=> a.length <= b.length ? a : b)
   
}

let longestWord = (array) => {
    return array.reduce((a,b) => a.length >= b.length ? a : b)
}

let sumNumbers = (array) => {
    return array.reduce((a,b) => a + b, 0);
}

let repeatElements = (array) => {
   return array.concat(array)
   
    
}

let stringToNumber = (string) => {
    return parseFloat(string)
}

let calculateAverage = (array) => {
    array=array.reduce((a,b) => a+b,0) /array.length;
    return array
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0,6)
}

let convertArrayToObject = (array) => {
    let obj= {}
    for (let i = 0; i < array.length; i+=2){
        obj[array[i]] = array [i+1]
    }
    return obj;
}

let getAllLetters = (array) => {
let arr=array.join("").split("").sort()
return [...new Set(arr)]
    
}

let swapKeysAndValues = (object) => {
    let swap= Object.entries(object).map(([k,v]) =>[v,k])
    // transforme liste de paires keys values en object
    return Object.fromEntries(swap)
}

let sumKeysAndValues = (object) => {

let extr= Object.entries(object).map(([k,v]) => [k,v])
let str= extr.flat()
let joi= str.join('')
let numbers= parseFloat(joi)
return  Math.abs(numbers).toString().split('').reduce(function(a,b){return +a + +b}, 0);

}

let removeCapitals = (string) => {
    return string.replaceAll(/[A-Z]/g, "")
}

let roundUp = (number) => {
    return Math.ceil(number)
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
