const eventEmitter = require('./9-event-emitters');
const customEmitter = require("./11-event-emitters-custom");
module.exports = {
    registerUser : (username,email)=> {
        console.log("Registering the user with ", username, email);
       // eventEmitter.emit("afterUserRegistration", {username:username,email:email});
       // eventEmitter.emit('error','Failed');
      //  eventEmitter.emit('end',"end of ");
        customEmitter.emitAfterRegistration({username:username,email:email});
    }
}
