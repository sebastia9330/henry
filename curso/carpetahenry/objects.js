var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
 if(persona.edad){
    console.log(persona);
 }

 // ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['manos'].push('Pantalones');
console.log(atuendos);


//funcion dentro de un objeto con variables externas
var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos){
    comidas[propUno] = ['frutas', 'verduras'];
    comidas[propDos] = ['hamburguesa', 'pizza'];
};
console.log(comidas)
