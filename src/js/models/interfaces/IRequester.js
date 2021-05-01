import app from '../../app.js';

export default class IRequester {
    static apiEndpoint() { return 'https://inmovery.ru/api'; }

    static GET(endpoint, onComplete, onError, page = 0) {
        app.request.get(
            `${this.apiEndpoint()}/${endpoint}`,
            (data) => {
                try {
                    let response = JSON.parse(data)[0];
                    if (response.result == true) return onComplete(response.data);
                    else return onError('Complete is false', response.data)
                }
                catch (ex) { return onError('Can not parse', data) }
            },
            (xhr, code, err) => { return onError(`Request error (${code})`, err) }
        );
        return;
    }

    static POST(endpoint, requestBody, onComplete, onError, page = 0) {
        app.request.get(
            `${this.apiEndpoint()}/${endpoint}`,
            requestBody,
            (data) => {
                try {
                    let response = JSON.parse(data);
                    if (response.complete && onComplete) return onComplete(response.data.list);
                    else if (onError) return onError('Complete is false', response.data)
                }
                catch (ex) { if (onError) return onError('Can not parse', data) }
            },
            (xhr, code, err) => { if (onError) return onError(`Request error (${code})`, err) }
        );
        return;
    }

}
