let arr1 = ["it's Sunny in", "", "California"];

console.log(arr1.map(x=>x.split(" ")))

console.log(arr1.flatMap(x=>x.split(" ")))

Array.prototype.myFlatMap = function(callback){

    for(let i = 0;i<this.length;i++){
        result.push(callback(this[i]));
    }
    return result.flat();
}
console.log(arr1.myFlatMap(x=>x.split(" ")))