var strings = ["sebastian", "dilza", "sam", "filiberto"];
strings.sort((a,b)=>{
   return a.length - b.length
});

console.log(strings[strings.length-1])
