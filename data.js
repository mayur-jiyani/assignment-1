const request = require('request')

const dataretrival = (urlLink, callback) => {

    request({ url: urlLink.url, headers: urlLink.headers, json: true }, (error, response) => {

        if (error) {
            callback(error)
        } else {
            callback(response.body)
        }
    })
}

module.exports = dataretrival