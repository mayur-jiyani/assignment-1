const { application } = require('express');
const express = require('express');
const dataretrival = require('./data')
const app = express();

// api object to access data from api
const urlLink = {
    url: 'https://api.github.com/search/repositories?q=is:public&limi=1',

    // User-Agent request header
    headers: {
        "User-Agent": "request"
    }
};

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

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



app.get('/', (req, res) => {

    dataretrival(urlLink, (data) => {
        if (error) {

            // if error occured then printing error
            res.send(error)
        } else if (data.length > 0) {

            // if data is recieved then writing into csv
            csvWriting.writeRecords(data).then(() => {
                res.send('...Done');
            });

        } else {
            res.send('data is unavailable');
        }
    })

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});