//PROJET CALCULATOR

let body = document.querySelector('body'); //on selectionne le body

let divCalculator = document.createElement('div'); //on crée une div principale
body.appendChild(divCalculator); //on ajoute la div principale au body
divCalculator.setAttribute("class", "calculatorDiv")

let divScreen = document.createElement('div'); //on crée une div pour l'écran
divCalculator.appendChild(divScreen); //on ajoute la div de l'écran à la div principale
divScreen.setAttribute("class", "ecran") 

let touches = document.createElement('div'); //on crée une div pour les touches
divCalculator.appendChild(touches); //on ajoute la div des touches à la div principale  


//Boucle pour les touches
let buttons = [
    "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="
];

buttons.forEach(function(text) {
    let btn = document.createElement("button");
    let textBtn = document.createTextNode(text);
    btn.setAttribute("class", "button");
    btn.appendChild(textBtn);
    touches.appendChild(btn);
});




//TOUS les boutons sans boucle
// let button1 = document.createElement('button'); //on crée un bouton
// let textButton1 = document.createTextNode('C'); //on crée un texte pour le bouton
// touches.appendChild(button1); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton1); //on ajoute le bouton à la div des touches


// let button2 = document.createElement('button'); //on crée un bouton
// let textButton2 = document.createTextNode('('); //on crée un texte pour le bouton  
// touches.appendChild(button2); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton2); //on ajoute le bouton à la div des touches


// let button3 = document.createElement('button'); //on crée un bouton
// let textButton3 = document.createTextNode(')'); //on crée un texte pour le bouton
// touches.appendChild(button3); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton3); //on ajoute le bouton à la div des touches


// let button4 = document.createElement('button'); //on crée un bouton
// let textButton4 = document.createTextNode('/'); //on crée un texte pour le bouton
// touches.appendChild(button4); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton4); //on ajoute le bouton à la div des touches


// let button5 = document.createElement('button'); //on crée un bouton
// let textButton5 = document.createTextNode('7'); //on crée un texte pour le bouton
// touches.appendChild(button5); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton5); //on ajoute le bouton à la div des touches


// let button6 = document.createElement('button'); //on crée un bouton 
// let textButton6 = document.createTextNode('8'); //on crée un texte pour le bouton
// touches.appendChild(button6); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton6); //on ajoute le bouton à la div des touches


// let button7 = document.createElement('button'); //on crée un bouton
// let textButton7 = document.createTextNode('9'); //on crée un texte pour le bouton
// touches.appendChild(button7); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton7); //on ajoute le bouton à la div des touches


// let button8 = document.createElement('button'); //on crée un bouton
// let textButton8 = document.createTextNode('*'); //on crée un texte pour le bouton
// touches.appendChild(button8); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton8); //on ajoute le bouton à la div des touches


// let button9 = document.createElement('button'); //on crée un bouton 
// let textButton9 = document.createTextNode('4'); //on crée un texte pour le bouton
// touches.appendChild(button9); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton9); //on ajoute le bouton à la div des touches


// let button10 = document.createElement('button'); //on crée un bouton
// let textButton10 = document.createTextNode('5'); //on crée un texte pour le bouton
// touches.appendChild(button10); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton10); //on ajoute le bouton à la div des touches


// let button11 = document.createElement('button'); //on crée un bouton
// let textButton11 = document.createTextNode('6'); //on crée un texte pour le bouton
// touches.appendChild(button11); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton11); //on ajoute le bouton à la div des touches


// let button12 = document.createElement('button'); //on crée un bouton
// let textButton12 = document.createTextNode('-'); //on crée un texte pour le bouton
// touches.appendChild(button12); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton12); //on ajoute le bouton à la div des touches


// let button13 = document.createElement('button'); //on crée un bouton
// let textButton13 = document.createTextNode('1'); //on crée un texte pour le bouton
// touches.appendChild(button13); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton13); //on ajoute le bouton à la div des touches


// let button14 = document.createElement('button'); //on crée un bouton
// let textButton14 = document.createTextNode('2'); //on crée un texte pour le bouton
// touches.appendChild(button14); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton14); //on ajoute le bouton à la div des touches


// let button15 = document.createElement('button'); //on crée un bouton
// let textButton15 = document.createTextNode('3'); //on crée un texte pour le bouton
// touches.appendChild(button15); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton15); //on ajoute le bouton à la div des touches


// let button16 = document.createElement('button'); //on crée un bouton
// let textButton16 = document.createTextNode('+'); //on crée un texte pour le bouton
// touches.appendChild(button16); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton16); //on ajoute le bouton à la div des touches


// let button17 = document.createElement('button'); //on crée un bouton
// let textButton17 = document.createTextNode('0'); //on crée un texte pour le bouton
// touches.appendChild(button17); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton17); //on ajoute le bouton à la div des touches


// let button18 = document.createElement('button'); //on crée un bouton
// let textButton18 = document.createTextNode('.'); //on crée un texte pour le bouton
// touches.appendChild(button18); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton18); //on ajoute le bouton à la div des touches


// let button19 = document.createElement('button'); //on crée un bouton
// let textButton19 = document.createTextNode('='); //on crée un texte pour le bouton
// touches.appendChild(button19); //on ajoute le bouton à la div des touches
// touches.appendChild(textButton19); //on ajoute le bouton à la div des touches
