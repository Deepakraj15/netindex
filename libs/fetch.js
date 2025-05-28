const { addLog } = require('./logStore');

function handleFetchRequests(callback) {
  const _originalFetch = window.fetch;

  window.fetch = async (...args) => {
    const response = await _originalFetch(...args);
    const cloned = response.clone();

    const log = {
      type: 'fetch',
      request: args,
      status: response.status,
      response: await cloned.text(),
      timestamp: Date.now()
    };

    addLog(log);
    callback(log);

    return response;
  };
}

module.exports = { handleFetchRequests };
