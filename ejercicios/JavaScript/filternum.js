var array = [1, "strds", 2, "sam"]
var nums = array.filter(item => Number.isInteger(item));
console.log (nums)

nums.forEach((num => num*2))
console.log(nums)