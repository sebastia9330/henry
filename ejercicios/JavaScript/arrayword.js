function encontrandoLetra (string){
    var revisar = string.split('');
    for (var i = 0; i < revisar.length; i++){
        if(revisar[i] === "p"){
            console.log("contiene la letra P")
        }
    }
}

encontrandoLetra("sebastian come pan")
encontrandoLetra("pedro")