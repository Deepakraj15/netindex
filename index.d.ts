// index.d.ts

/**
 * Represents a log entry for a network request (fetch or XMLHttpRequest).
 */
export interface NetworkLog {
  type: 'fetch' | 'xhr';
  method?: string;     // Present for XHR
  url?: string;        // Present for XHR
  request?: any[];     // Present for fetch
  status: number;
  response: string;
  timestamp: number;
}

/**
 * Adds a log entry to the internal log store.
 *
 * @param entry - A network log entry.
 */
export function addLog(entry: NetworkLog): void;

/**
 * Retrieves all stored log entries.
 *
 * @returns A copy of the current logs.
 */
export function getLogs(): NetworkLog[];

/**
 * Clears all stored log entries.
 */
export function clearLogs(): void;

/**
 * Starts monitoring network requests made via `fetch`.
 *
 * @param callback - Optional function called with each request log.
 * @param log - Whether to store the log internally (default: true).
 */
export function handleFetchRequests(
  callback?: (log: NetworkLog) => void,
  log?: boolean
): void;

/**
 * Starts monitoring network requests made via `XMLHttpRequest`.
 *
 * @param callback - Optional function called with each request log.
 * @param log - Whether to store the log internally (default: true).
 */
export function handleXMLHttpRequest(
  callback?: (log: NetworkLog) => void,
  log?: boolean
): void;

/**
 * Starts monitoring all network requests (both `fetch` and `XMLHttpRequest`).
 *
 * @param callback - Optional function called with each request log.
 * @param log - Whether to store the log internally (default: true).
 */
export function monitorNetwork(
  callback?: (log: NetworkLog) => void,
  log?: boolean
): void;

/**
 * React hook to monitor all network requests in components.
 *
 * @param callback - Called with each log entry.
 * @param log - Whether to store the log internally (default: true).
 */
export function useNetworkMonitor(
  callback?: (log: NetworkLog) => void,
  log?: boolean
): void;
