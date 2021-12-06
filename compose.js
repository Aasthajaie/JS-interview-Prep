/*
    compose-> takes n number of argumnets which are of function types
    -> it returns a function with all the arguments called in calling time
    -> starts from the end of array of functions(arguments)
    -> call the last method and returned its output and considering the output as argument for last-1 function and call with the same. it goes on till the end of functions
*/

//goldmann saches problem
const add = (a, b) => a+b

const double = (a) => a*2

const quarter = (a) => a/4

const add2 = (a) => 2 + a


const a = compose(
    add2,
    quarter, 
    double,
    add
)

add2(quarter(double(add(1,2)))) // 3.5

console.log(a(1,2))

function compose(...funcs){

    return (...args)=>{
        const result=funcs.reduceRight((pv,cv,index)=>{
                return [cv(...pv)]
        },args)
        return result[0];
    }
}

