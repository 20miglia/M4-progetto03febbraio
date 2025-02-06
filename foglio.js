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

