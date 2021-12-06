/*
    deepClone-> a function which takes two arguments : 1. any type of value which needed to clone 
    2. a number type argument - depth of cloning 
        return cloned value
*/
const object1={
    a:3,
    arr:[2,3,4],
    obj:{c:4,d:{
        'abc':'letter',
        'def':'alphabet'
    }}
}
const arr=[1,2, {a:1}]
/*
    object can have  type of keys- number , string, array,object
    depth- kitne level tk values clone krni hai...uske bad values kka refernce dal denge
*/

function myDeepClone(itemToClone,depth=1)
{
    if(Array.isArray(itemToClone)){
        if(depth==1) {
            return [...itemToClone];
        }
        return itemToClone.map((ele)=>myDeepClone(ele,depth-1));
    }
    if(typeof itemToClone==null){
        return null;
    }

    if(typeof itemToClone=='object'){
        if(depth==1){
            return {...itemToClone}
        }
        return Object,keys(itemToClone).reduce((ele)=>{
            myDeepClone(ele,depth-1)
        },{})
    }
}

console.log(myDeepClone(2))