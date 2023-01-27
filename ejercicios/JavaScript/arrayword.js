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

var num = 956;
var str = num.toString();
var array = str.split('')
console.log(array)
for(var i = 0; i < array.length; i++){
    if(array[i] === '9'){
        console.log (true);
    }
}
console.log(false)

var a = [1, 2, 3, 4, 9, 6, 7, 8, 5]
for (let i = 0; i < a.length; i++) {
    if (a[i] === 9) {
        console.log("lo encontre")
        console.log("y me detuve")
      break ; 
    }if(a[i] === 8)
        console.log("no sali")
  }
  
    let i = 0;
    let n = 0;
    while (i < 5) {
    i++;
    if (i === 3) {
     continue;
    }
    n += i;
    console.log(n);
}