/*
Promis : object which represents an eventual completion or failure of an event
        asynchronous operation

        Promise is a microtask. which executes before macroTask. So do not make recursive promises it would make infinite loop
*/ 


const states={
    PENDING: 'pending',
    FULFILLED : 'fulfilled',
    REJECTED : 'rejected'
}
const isThenable=mayBePromise => mayBePromise && typeof mayBePromise.then=='function';

class myPromise{

    constructor(executorFunc){
        this._state=states.PENDING;
        this._value=undefined;
        this._reason=undefined;
        this.thenQueue=[];
        this.finallyQueue=[];

        if(typeof executorFunc=='function')
        executorFunc(this._resolve.bind(this),this._reject.bind(this));
    }
     _resolve(value){
            
        if(this._state==states.PENDING){
            this._state=states.FULFILLED;

            this._value=value;
           this._propagateFulfilled();
        }
            

        }
    _reject(reason){
            if(this._state==states.PENDING){
                this._state=states.REJECTED;

                this._reason=reason;
                 this._propagateRejected();
            }
            
        }
    then(fulfilledFunc,catchFunc){
         const controlledPromise=new myPromise();
        if(this._state==states.FULFILLED){
          queueMicrotask(()=>{
            this._propagateFulfilled();
          })
        }
        else if(this._state==states.REJECTED){
            queueMicrotask(()=>{
                this._propagateRejected();
            })
        }
        else{
            this.thenQueue.push([controlledPromise,fulfilledFunc,catchFunc])
        }
        return controlledPromise;
    }
    catch(){
        return this.then(undefined,catchFunc);
    }
    finally(sideEffectFunc){
        if(this._state!=states.PENDING){
            sideEffectFunc();

            return this._state===states.FULFILLED ? myPromise.resolve(this._value): myPromise.reject(this._reason);
        }

    }
    _propagateFulfilled(){
        this.thenQueue.forEach(([controlledPromise,fulfilledFunc])=>{
            if(typeof fulfilledFunc=='function'){
                    const valueOrPromise=fulfilledFunc(this._value);
                if(isThenable(valueOrPromise)){
                    valueOrPromise.then(
                        value=>controlledPromise._resolve(value),
                        reason=>controlledPromise._reject(reason)
                    );
                }
                else{
                   controlledPromise._resolve(valueOrPromise)
                }
            }
            else{
                return controlledPromise._resolve(this._value);
            }
        });
    }
    _propagateRejected(){
        this.thenQueue.forEach(([controlledPromise,_,catchFunc])=>{
            if(typeof catchFunc=='function'){
                const valueOrPromise=catchFunc(this._reason);
                if(isThenable(valueOrPromise)){
                    valueOrPromise.then(
                        controlledPromise._resolve(this._value),
                        controlledPromise._reject(this._reason)
                    );
                }
                else{
                    controlledPromise._reject(valueOrPromise);
                }
            }else{
                return controlledPromise._reject(this._reason);
            }
        });
        this.finallyQueue.forEach(([controlledPromise,sideEffectFunc])=>{
            sideEffectFunc();
            controlledPromise._reject(this._value);
        });

        this.thenQueue=[];
        this.finallyQueue=[];
    }
}


const promise=new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(43)
    });
})

promise.then((value)=>{
    console.log(value);
    return value+1;
}).then((value)=>{
    console.log(value)
}).finally((value)=>{
    console.log('safbj')
})

promise.then((value)=>{
    console.log(value);
})



const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(42);
    })
})
promise2.then((value)=>{
    console.log(value);
    return value+1;
}).then((value)=>{
    console.log(value)
}).finally((value)=>{
    console.log('safbj')
})

promise2.then((value)=>{
    console.log(value);
})
