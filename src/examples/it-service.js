const eventEmitter = require('./9-event-emitters');
const customEmitter = require("./11-event-emitters-custom");
eventEmitter.on('afterUserRegistration', (userInfo)=>{
    console.log("Allocating hardware for user",userInfo);
});

customEmitter.onAfterRegistration((userInfo)=>{
    console.log("Custom after registration for hardware allocation", userInfo);
});