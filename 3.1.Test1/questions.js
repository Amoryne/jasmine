
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
let str1="Le javascript est";
let str2="super";
return str1.concat(' ',str2);
}
let afficherCar5 =  (texte) => {
    let character ="abcdfe";
return character.charAt(5);

}
let afficher9Car =  (texte) => {
    let char= "Je dirais que je suis un chat";
    return char.substring(0,9);

}
let majusculeString =  (texte) => {
let str1="un autre excellent exercice";
return str1.toUpperCase();
}
let minusculeString =  (texte) => {
let str="CELUI CI AUSSI!"
return str.toLowerCase();
}
let SupprEspaceString =  (texte) => {
let str= " Rome ne s'est pas construite en un jour ";
return str.slice(1,40);
}
let IsString =  (texte) => {
let str="chien";
if(typeof str === 'string'){
    return true;
}else{
    return false;
}}

let AfficherExtensionString =  (texte) => {
let str='image.jpg';
return str.substring(str.lastIndexOf('.') + 1);
}
let NombreEspaceString =  (texte) => {
let str= "je suis un aigle géant vert";
return str.split(' ').length -1
}
let InverseString =  (texte) => {
let str = "Après demain, à partir d'aujourd'hui?";
return str.split("").reverse().join("");
// .reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
return Math.pow(2,3);
}
let valeurAbsolue =  (nombre) => {
return Math.abs(5);
}
let valeurAbsolueArray =  (array) => {
  let newarr=[
  Math.abs(5),Math.abs(50),Math.abs(25),Math.abs(568)];
 
return newarr;
}
let sufaceCercle =  (rayon) => {
   
let x= 2* Math.PI * 12.5; 
return Math.round(x);
}
let hypothenuse =  (ab, ac) => {

}
let calculIMC =  (poids, taille) => {
let weight=59.90;
let height=168;
let imc = (weight / ((height*height)/10000)).toFixed(2);
return Number(imc);

}
