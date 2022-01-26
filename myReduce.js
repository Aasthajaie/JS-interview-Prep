
/*
    Reduce takes argument-callback function,initial value
    callback of reduce -> previous value,current value,index,array,
    if inital value is not given->array[0] th index is considered as initial value
    reduce returns previous value;
    if initial is given -iteration starts from 0 otherwise from 1 (as 0th index has already been considered as pv)

*/
const arr=[1,2,3,4];

const arrReduced=arr.reduce((pv,cv)=>pv+cv);

Array.prototype.myReduce=function(callback,initial){

    let pv=initialValue || this[0];
    let i=initial?0:1;
   for(;i<this.length;i++)
   {
       pv=callback(pv,this[i]);
   }

   return pv;

}

function callback(pv,cv)
{
    return pv+cv;
}

console.log(arr.myReduce(callback))