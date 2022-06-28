/*
Descrizione:
Rivediamo l’esercizio della lista della spesa visto insieme, 
ma questa volta con il ciclo while al posto del ciclo for. 
Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, 
in particolare alla variabile di indice.
Consigli:
Potete provare a fare l'esercizio una prima volta col for e poi convertire piano piano in while.
Lista della spesa (da convertire in array)
Uova
Pane
Latte
Biscotti
Pasta
Affettati
Formaggio
Verdura
Frutta
*/

// Creo il mio array e mi preparo per metterlo in pagina

const shopping = ['uova', 'pane', 'latte', 'biscotti', 'pasta', 'affettati', 'formaggio', 'verdura', 'frutta'];
const resultList = document.getElementById('result');

// Organizzo il ciclo
let list = '';
let goods = '';

// for(let i = 0; i < shopping.length; i++) {
//     goods = `<li>${shopping[i]}</li>`;
//     list += goods;
// }

let i = 0;
while(i < shopping.length ){
    goods = `<li>${shopping[i]}</li>`;
    list += goods;
    i++;
}

// Stampo
resultList.innerHTML = list;
