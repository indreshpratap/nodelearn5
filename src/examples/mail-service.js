const eventEmitter = require('./9-event-emitters');
const customEmitter = require("./11-event-emitters-custom");

eventEmitter.on('afterUserRegistration', (userInfo)=>{
    console.log("Creating a welcome email for user",userInfo);
});


customEmitter.onAfterRegistration((userInfo)=>{
    console.log("Custom after registration", userInfo);
});