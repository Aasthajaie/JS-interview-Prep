/*
Throttle- call function once in every interval
*/

function throttling(func,limit=1000){
    let isThrottled;
    return function(...args){
        if(!isThrottled){
            isThrottled=true;
            func.apply(this,args);
            setTimeout(()=>{
                isThrottled=false;
            },limit)

        }

    }
}
function onChange(value){
    console.log(value)
}
const throttled=throttling(onChange);

setTimeout(()=>{
    throttled('A')
},1003)
throttled('AA')
setTimeout(()=>{throttled('AAS')},2100);
throttled('AAST')
throttled('AASTH')
throttled('AASTHA')