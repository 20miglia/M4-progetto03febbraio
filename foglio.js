/* Esercizio Numero 1 */

const numero1 = 20

const numero2 = 30

function calcolo(parametro1,parametro2) {
    if(parametro1 === 50||parametro2===50||parametro1+parametro2===50){
  return true
    } else {
        return false
    }
}

let totale = calcolo(numero1,numero2)

console.log(totale)

/*Esercizio numero 2 */

let parola = "delfino"

let set = 0

let rimuoviCarattere = (stringa, posizione) => {
    let modifica = stringa.split("")
    modifica.splice(posizione, 1)
    return modifica.join("")

}

let operazione = rimuoviCarattere(parola,set)

console.log(operazione)

/*Esercizio numero 3*/

let a = 50
let b = 55

let compreso = (valore1, valore2) => {
 if((valore1>=40 && valore1<=60 && valore2>=40 && valore2<=60)||
 (valore1>=70 && valore1<=100 && valore2>=70 && valore2<=100))
 {
    return true
 } else {
    return false
 }
}

let prova = compreso(a,b)

console.log(prova)

/*Esercizio numero 4*/

let cerca = (città) => {
 if(città.startsWith("Los") || città.startsWith("New")) {
    return città } 
    else {
        return false
    }
}

/*Esercizio numero 5*/

let sas = [5,10,20]

let somma = (calcola) => {
    let verifica = 0 
    for (let i = 0; i < calcola.length; i++){
        let vel = calcola[i]
        verifica += vel
    }
    return verifica
}

let das = somma(sas)

console.log(das)

/*Esercizio numero 6*/

let not = (tic) => {
    if (tic.includes(1) || tic.includes(3)) {
        return false
    } else {
        return true
    }
  }
  
  /*Esercizio numero 7*/

  let vet = (gradi) => {
    if (gradi<90) {
        return "acuto"
    }
    else if(gradi>90 && gradi<180) {
        return "ottuso"
    }
    else if (gradi === 90) {
        return "retto"
    }
    else if (gradi === 180) {
        return "piatto"
    }
   
  }
 
  /*Esercizio numero 8*/

    let acronimo = (parola) => {
    let processo = parola.split(" ")
    let casuale = ""
    for(let i=0; i < processo.length; i ++){
        let pit = processo[i]
        casuale += pit.charAt(0)
    }
    return casuale
  }
 
  
  