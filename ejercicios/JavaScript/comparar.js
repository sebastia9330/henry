var arrar1 = [1,48,3,59,37,6,-1];
var arrar2 = [48,67,2,-1,6,36,37,40,59];
var arrar3 = [];
var arr = []; 
arrar1.sort((a,b)=>{
    if(a == b){
        return 0;
    }
    if(a < b){
        return -1;
    }
    return 1;
});
console.log(arrar1)
arrar2.sort((a,b)=>{
    if(a == b){
        return 0;
    }
    if(a < b){
        return -1;
    }
    return 1;
});
console.log(arrar2)
for(var i = 0; i < arrar1.length; i++){
    if(arrar1[i] === arrar2[i]){
        arrar3.push(arrar1[i])
    }
        
}
console.log(arrar3)
/*
for(var i = 0; i < arrar1.length; i++){
    for(var j = 0; j < arrar2.length; j++){
        if(arrar1[i] === arrar2[j]){
            arrar3.push(arrar2[j])
        }
    }
}
console.log(arrar3) */