const request = require('request')

// api object to access data from api
const urlLink = {
    url: 'https://api.github.com/search/repositories?q=is:public&limi=1',

    // User-Agent request header
    headers: {
        "User-Agent": "request"
    }
};

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// function that retives data and callback
const dataretrival = (urlLink, callback) => {

    // send request for data and recieve in json format
    request({ url: urlLink.url, headers: urlLink.headers, json: true }, (error, response) => {

        if (error) {
            callback(error)
        } else {

            // data array is for storing the data specific conditions
            let data = [], stargazersData = [];

            // storing data in data array if language and forks_count
            response.body.items.forEach(item => {
                if (item.language === 'JavaScript' && item.forks >= 100) {
                    dataforks = {
                        name: item.name,
                        lang: item.language,
                        description: item.description,
                        html_url: item.html_url,
                        watchers_count: item.watchers_count,
                        stargazers_count: item.stargazers_count,
                        forks_count: item.forks
                    }

                    // appending dataforks object in data array
                    data.push(dataforks)
                    // callback(data)

                    if (item.stargazers_count > 500) {
                        stargazers = { name: item.name, lang: item.language, description: item.description, html_url: item.html_url, watchers_count: item.watchers_count, stargazers_count: item.stargazers_count, forks_count: item.forks }
                        stargazersData.push(stargazers)

                    }
                }


            })
            callback(stargazersData)
        }
    })
}

// creating csvWriting object 
const csvWriting = createCsvWriter({

    path: './stargazersData.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'lang', title: 'Language' },
        { id: 'html_url', title: 'Html url' },
        { id: 'watchers_count', title: 'Watchers count' },
        { id: 'stargazers_count stargazers_count', title: 'Stargazers count' },
        { id: 'forks_count', title: 'Forks count' }
    ]
});


dataretrival(urlLink, (msg) => {
    if (msg.length > 0) {

        // if data is recieved then writing into csv
        csvWriting.writeRecords(msg).then(() => {
            console.log('...Done');
        });

    } else if (msg) {

        // if error occured then printing error
        console.log(msg)
    } else {
        console.log('data is unavailable');
    }
})
// module.exports = dataretrival