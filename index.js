const { handleFetchRequests } = require("./libs/fetch");
const { handleXMLHttpRequest } = require("./libs/xmlHttpRequest");

/**
 * Monitor all network requests made by fetch or XMLHttpRequest.
 * 
 * @param {Function} callback - Function to initiate network monitoring
 */
function monitorNetwork(callback = console.log,log=true) {
    try {
        handleFetchRequests(callback,log);
        handleXMLHttpRequest(callback,log);
    } catch (e) {
        console.error("Error while setting up network monitoring:", e);
    }
}

module.exports = { monitorNetwork };
