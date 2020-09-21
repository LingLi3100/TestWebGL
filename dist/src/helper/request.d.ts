declare type CallBackFunction = (xhr: XMLHttpRequest) => void;
/**
 * Http Client to do easy http request to external resources
 */
export declare class HttpClient {
    /**
     * Creates new XHR and bind result to callback function
     * @param {function} callback
     * @return {XMLHttpRequest} xhr
     */
    private getXHR;
    /**
     * Formats url parameter from object to string
     * @param {string} url
     * @param {any} data
     * @return {string} new url with params
     */
    private getUrl;
    /**
     * Do a http get call
     * @param {string} url
     * @param {any} data
     * @param {function} callback
     */
    get(url: string, data: any, callback: CallBackFunction): void;
    /**
     * Do a http post call
     * @param {string} url
     * @param {any} data
     * @param {function} callback
     */
    post(url: string, data: any, callback: CallBackFunction): void;
}
export {};
