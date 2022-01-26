/**
 * map is in prototype of Array
 * map takes 1 argument which will be a callback function
 * callback function of map has 3 arguments 1: value at i'th index 2: index 3: array itself
 * map function iterates over the this(Array) and call the callback function for each of it's value
 *  */ 

const arr=[1,2,3];
const modifiedArr=arr.map((val)=>val*2);

Array.prototype.myMap=function(callback){

        const ans=[];
        for(let i=0;i<this.length;i++)
        {
            ans[i]=callback(this[i],i,this)
        }
        return ans;

}
function callback(val,index,arr){

    return val*2;
}
console.log(arr.myMap(callback))