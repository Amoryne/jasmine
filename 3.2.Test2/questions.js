let CreationTableauLangages =  () => {
let arr=['Html','CSS','Java','PHP'];
return arr;
}

let CreationTableauNombres =  () => {

let numbers=[0,1,2,3,4,5];
return numbers;
}

let RemplacementElement =  (langages) => {
let arr= ['Html','CSS','PHP'];
arr.splice(2,0,'Javascript');
return arr;
}

let AjoutElementLangages =  (langages) => {
let arr = [ 'Html', 'CSS', 'Javascript', 'PHP'];
arr.push('Ruby', 'Python');
return arr;

}

let AjoutElementNombres =  (nombres) => {
let arr = [0, 1, 2, 3, 4, 5 ];
let arr2=[-2,-1];
Array.prototype.push.apply(arr2,arr);
return arr2;
}

let SuppressionPremierElement =  (langages) => {

let arr=["Chocolat",'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
arr.shift();
return arr;

}

let SuppressionDernierElement =  (langages) => {
let arr=['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
arr.pop();
return arr;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
let res='Facebook,Twitter,Google +,Viadeo,LinkedIn';
return res.split("\,")



}

let ConversionTableauChaine =  (langages) => {
    let langue= ['CSS', 'Javascript', 'PHP', 'Ruby']
    return langue.toString()

}

let TriTableau =  (reseaux_sociaux) => {
let res = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
res.sort();
return res;
}

let InversionTableau =  (langages) =>{
 let arr= ['CSS', 'Javascript', 'PHP', 'Ruby'];
 return arr.reverse()
}
