/*
    debouncing - when we click on event, every time call goes to server. Debouncing is a process to reduce the calls going to server making system fast. Through 
    debouncing, the call would go just at the last time event is clicked.


*/

function debouncing(func,delay=1000)
{
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        let context=this;
        timeoutId=setTimeout(()=>{
            func.apply(context,args)
        },delay)
    }
    
}
function onChange(value){
    console.log(value)
}
const debounced=debouncing(onChange);

debounced('A')
debounced('AA')
debounced('AAS')
debounced('AAST')
debounced('AASTH')
debounced('AASTHA')