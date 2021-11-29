//Design pattern -PUblisher Subscriber Pattern
/*
    "publisher" broadcast a message on a particular topic  and it would be accessible using "subscribe" method.
    "unsubscibe"-would unsubscribe a user from sunscribing on particular topic and later sunscriber won't able to access.
*/

const pubSub = {
    topics: {

    },
    publish: function(topicId, payload){
        Object.getOwnPropertySymbols(this.topics[topicId]).forEach((s) => {
            this.topics[topicId][s](payload)
        })
    },
    subscribe: function(topicId, callback){
        if(!this.topics[topicId]){
            this.topics[topicId] = {}
        }
        const subscribtionId = Symbol()
        this.topics[topicId][subscribtionId] = callback;
        return () => {
            delete this.topics[topicId][subscribtionId]
        }
    }
}
