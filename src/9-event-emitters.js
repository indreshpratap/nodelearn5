const events = require('events');


let myEmitter = new events.EventEmitter();

module.exports = myEmitter;

myEmitter.on('error',(err)=>{
    console.log('Handling error and eror is: ', err);
})
// myEmitter.emit('open','Event portal opened');

// setTimeout(() => {
//     myEmitter.emit('open','Event portal opened after 1 sec');   
//     myEmitter.emit('open','Event portal opened after 1 sec');   
//     myEmitter.emit('open','Event portal opened after 1 sec');   
//     myEmitter.emit('open','Event portal opened after 1 sec');   
//     myEmitter.emit('open',{user:'username',content:'cont'});   
// }, 1000);

// myEmitter.on('open',(data)=>{
//   console.log("Received event of type open: ", data);
// });