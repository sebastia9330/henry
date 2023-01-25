var listaDeCompras = [];
// Lista de compras agregar datos
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

//methods
// Lenght (metodo para saber la cantidad de objetos en el arreglo)
// method to find the number of objects in the array
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo'); //agrega uno o mas elementos al final del arreglo
colores.unshift('Verde'); //agrega uno o mas elementos al inicio del arreglo

console.log(colores);
// POP y SHIFT
colores.shift(); //elimina y devuelve el primer elemento de un arreglo
colores.pop(); //elimina y devuelve el último elemento de un arreglo

console.log(colores);
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí'); //determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso

console.log(existeDali);
// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } ); //determina si todos los elementos en un arreglo satisfacen una misma condición.

console.log(cumplenCondicion);
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');//convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos

console.log(palabraSeparada);
// JOIN
var palabraArreglada = palabraSeparada.join(''); // convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena

console.log(palabraArreglada);
// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )//nos permite recorrer un arreglo, realizando alguna acción en para cada elemento
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );//también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados

console.log(masUno);