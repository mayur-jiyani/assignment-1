const request = require('request')
const dataretrival = (callback) => {


const urlLink = {
    url: 'https://api.github.com/search/repositories?q=is:public&limit=1',
    headers: {'User-Agent': 'request'}
    };

    request({ urlLink, json: true }, (error, response) => {

        if (error) {
            callback(error)
        } else {
            callback(response.body.items)
        }

    })
}

    module.exports = dataretrival