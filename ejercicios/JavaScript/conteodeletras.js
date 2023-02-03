var letras = "adsjfdsfsfjsdjfhacabcsbajda";
var nuevoArray = letras.split('');
var contador = 0;
for (var i = 0; i < nuevoArray.length; i++){
    if(nuevoArray[i] === nuevoArray[i+1]){
        contador = contador + 1
    }
    
}
console.log(contador)