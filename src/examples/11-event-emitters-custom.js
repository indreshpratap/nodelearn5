const events = require('events');


let myEmitter = new events.EventEmitter();

let afterRegistrationSubscribers = [];


module.exports = {
emitAfterRegistration : (data)=>{
       myEmitter.emit("afterRegistration", data);
    },

    onAfterRegistration: (callback)=>{
        afterRegistrationSubscribers.push(callback);
    }


}


myEmitter.on('afterRegistration',(data)=>{
    triggerAfterRegistration(data);
})

function triggerAfterRegistration(data){
    console.log(afterRegistrationSubscribers);
    afterRegistrationSubscribers.forEach(cb=>cb(data));
}