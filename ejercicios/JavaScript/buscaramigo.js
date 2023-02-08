var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
var encontrado = amigos.filter(item => {
    if(item.nombre === 'toni'){
        return true;
    }else{
        return false
    }
});
console.log(encontrado[0].nombre)

var searchPropiedad = array.map(function(current){
    return current[propiedad]
  });
  return searchPropiedad