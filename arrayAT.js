const arr=[1,2,4,5,8,9];

console.log(arr.at(2),arr.at(-2));

const myAt=function(arr,index)
{
    if(index>0){
    return arr[index];
}
else
{
    return arr[arr.length-Math.abs(index)];
}
}
const val=myAt(arr,-2)
console.log('polyfill output',val);