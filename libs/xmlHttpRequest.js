const { addLog } = require('./logStore');

function handleXMLHttpRequest(callback,_log) {
  const _originalXHR = window.XMLHttpRequest;
  const _originalOpen = _originalXHR.prototype.open;
  const _originalSend = _originalXHR.prototype.send;

  _originalXHR.prototype.open = function (method, url) {
    this._requestMethod = method;
    this._requestUrl = url;
    return _originalOpen.apply(this, arguments);
  };

  _originalXHR.prototype.send = function (body) {
    this.addEventListener('load', function () {
        if(_log){
      const log = {
        type: 'xhr',
        method: this._requestMethod,
        url: this._requestUrl,
        status: this.status,
        response: this.response,
        timestamp: Date.now()
      };

      addLog(log);
      callback(log);
      }
    });

    return _originalSend.apply(this, arguments);
  };
}

module.exports = { handleXMLHttpRequest };
