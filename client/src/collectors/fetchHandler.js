import { addLog } from './logStore';

function handleFetchRequests(callback,_log) {
  const _originalFetch = window.fetch;

  window.fetch = async (...args) => {
    const response = await _originalFetch(...args);
    const cloned = response.clone();
    if(_log){
    const log = {
      type: 'fetch',
      request: args,
      status: response.status,
      response: await cloned.text(),
      timestamp: Date.now()
    };
    addLog(log);
    callback(log);
  }
    return response;
  };
}

export default { handleFetchRequests };
