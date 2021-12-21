// Variables
var a,b,solution,operation;
var aString, bString;



// Métier
function Calculer(a,b,operation){
    var _solution = undefined;
    switch (operation) {
        case '+':
            _solution = a + b;
            break;
        case '-':
            _solution = a-b;
                break;
        default:
            break;
    }
    return _solution;
}


// Présentation
function ClickSurnombre(number){
    if(a == undefined){
        if(aString == undefined) aString = '';
        aString += number;
    } 
    else {
        if(bString == undefined) bString = '';
        bString += number;
    } 

    Afficher();
}

function Afficher(number){

    var afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(a != undefined && b != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(aString != undefined)
        afficheur.value += aString 
        if(operation != undefined)
            afficheur.value += operation     
        if(bString != undefined)
            afficheur.value += bString 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        a = parseFloat(aString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Egale(){
  
    b = parseFloat(bString);
    solution = Calculer(a,b,operation);
    Afficher(solution);
}

function Init(){
    a = undefined;
    b = undefined;
    aString = undefined;
    bString = undefined;
    operation = undefined;
    var afficheur = document.getElementById("afficheur");
    
    afficheur.value = "";
}