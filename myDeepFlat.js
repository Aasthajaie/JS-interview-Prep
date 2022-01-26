
/*
Deepflatten  is a polyfill of flat array where all 2d array will be converted to 1D array depending on depth given as parameter.
return value - array; 
if depth > 0 we need to recursively call the function such that it becomes depth = 0
*/

const deepFlatten = function(arr,depth=1){

    return depth>0 ?
        arr.reduce((acc,red)=>acc.concat(Array.isArray(red)?deepFlatten(red,depth-1):red),[])
        :
        arr.slice();
}

// const flatArr2 = ;
const arr = [1,2,[3,4,[5,6,7,[8,9]]]]

console.log(deepFlatten(arr));