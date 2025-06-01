import { useEffect } from "react";
import { monitorNetwork } from "./libs"; // adjust the path as necessary

/**
 * React hook to monitor all network requests made by fetch or XMLHttpRequest.
 * 
 * @param {Function} callback - Function to handle each captured log.
 * @param {boolean} log - Whether to store the logs.
 */
export function useNetworkMonitor(callback = console.log, log = true) {
  useEffect(() => {
    monitorNetwork(callback, log);
  }, [callback, log]);
}
