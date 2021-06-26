const Global = require("../global");


module.exports = {
  execute(message, args) {
    // Access API with Global.client
    // Do something here
    const API = Global.client;

    API.sendMessage("This is a message", message.threadID);
  },
};
