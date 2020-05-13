export let dataHandler =
{
    _data: {},
    _api_get: function (url, callback) {
        // it is not called from outside
        // loads data from API, parses it and calls the callback with it

        fetch(url, {
            method: 'GET',
            credentials: 'same-origin'
        })
        .then(response => response.json())  // parse the response as JSON
        .then(json_response => callback(json_response));  // Call the `callback` with the returned object
        },
    getPlanets: function (url, callback){
        this._api_get(url, (response) => {
            this._data = response;
            callback(response);

    })
    },

};