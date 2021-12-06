/*Create Fibonacci using Generator Function
    Fibonacci Series- 0 1 1 2 3 5 8 13..
    f(n)=f(n-1)+f(n-2)
    Generator Function- returns an iterator, 
                        declared as  function *, takes yield 

*/ 

const fibGenerator=function * fibonacci(){

    let first=0;
    let second=1;

    while(second<200){
        yield second;
        let temp=first;
        first=second;
        second=temp+second;
    }
return second;
}();

let fib=fibGenerator.next();
console.log(fib);
do{
    console.log(fib.value);
    fib=fibGenerator.next();
}
while(!fib.done){
    console.log(fib.value);
    fib=fibGenerator.next();
}

console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())