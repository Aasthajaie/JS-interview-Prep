const arr = [1,2,3,4];

const filteredArr = arr.filter((val)=>val>2);
console.log(filteredArr)

Array.prototype.myFilter = function(callback){

    let result = [];
    for(let i=0;i<this.length;i++){
        let val = callback(this[i]);
        if(val)
        result.push(this[i]);
    }
    return result;
}
function callback(val){
    return val>2;
}

console.log(arr.myFilter(callback))