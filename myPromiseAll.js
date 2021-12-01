/*
    Promise.all- takes an iterable(array) of promises. it resolves all the promises until it gets a promise to reject.
    it returns a promise
*/

const promise1=Promise.resolve(43);
const promise2=2;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'aastha');
})



function myPromiseAll(promises){

    const isPromise=promise=>promise && typeof promise.then=='function';
    let results = [];
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
       if(isPromise(p)){
        p.then((result) => {
            results.push(result);
            if (index === promises.length - 1) {
              resolve(results);
            }
          }).catch((err) => reject(err));
       } 
        else{
           results.push(p);
        }
      });
    });
}
myPromiseAll([promise1,promise2,promise3]).then((values)=>[
    console.log(values) //output - [2,43,'aastha']
])