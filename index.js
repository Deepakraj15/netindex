const { handleFetchRequests } = require("./libs/fetch");
const { handleXMLHttpRequest } = require("./libs/xmlHttpRequest");

/**
 * Monitor all network requests made by fetch or XMLHttpRequest.
 * 
 * @param {Function} callback - Function to initiate network monitoring
 */
function monitorNetwork(callback = console.log) {
    try {
        handleFetchRequests(callback);
        handleXMLHttpRequest(callback);
    } catch (e) {
        console.error("Error while setting up network monitoring:", e);
    }
}

module.exports = { monitorNetwork };
