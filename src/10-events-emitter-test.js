
const requestProcessor = require('./request-processor');
require('./mail-service');
require('./it-service');


setTimeout(() => {
        requestProcessor.registerUser("user1","user1@gmail.com");
}, 1000);

setTimeout(() => {
    requestProcessor.registerUser("user2","user2@yahoo.com");
}, 4000);
