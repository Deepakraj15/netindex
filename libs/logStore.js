// libs/logStore.js

const logs = [];

function addLog(entry) {
  logs.push(entry);
}

function getLogs() {
  return [...logs]; // return a copy to avoid mutation
}

function clearLogs() {
  logs.length = 0;
}

module.exports = { addLog, getLogs, clearLogs };
