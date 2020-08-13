/* Elemento Padre */

let padre = document.getElementById('hijo').parentNode;
console.log(padre);

/*Elemento  hijo */

let hijo = document.getElementById('hijo').firstChild;
console.log(hijo);


/*Elemento hijo posterior*/
 
let nextHijo = document.getElementById('hijo').getElementsByTagName('strong')[0].nextSibling;
console.log(nextHijo);




/*Elemento hijo anterior*/

let previousHijo = document.getElementById('hijo').getElementsByTagName('strong')[0].previousSibling;
console.log(previousHijo);


/*AppendChild */

let lista = document.getElementById('padre');

let form = document.createElement('form');
lista.appendChild(form);

let ul = document.createElement('ul');
form.appendChild(ul);

let li = document.createElement('li');
ul.appendChild(li);