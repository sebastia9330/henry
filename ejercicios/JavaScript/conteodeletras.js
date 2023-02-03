var letras = "kkkkkkkkkkkkkkkkkkkkkkk";
var nuevoArray = letras.split('');
var contador = 1;
nuevoArray.sort()
var unicos = [];
var contadorRep = [];
var objt = {}
console.log(nuevoArray)
for (var i = 0; i < nuevoArray.length; i++){
    if(nuevoArray[i+1] === nuevoArray[i]){
        contador ++;
    }else{
        unicos.push(nuevoArray[i]);
        contadorRep.push(contador);
        contador = 1;
    }
}
for(var i = 0; i < unicos.length; i++){
    for(var j = 0; j<contadorRep.length; j++){
       objt[unicos[i]] = [contadorRep[j]]
    }
 }
console.log(objt)
