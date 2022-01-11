const { application } = require('express');
const express = require('express');
const dataretrival = require('./data')
const app = express();

const urlLink = {
    url: 'https://api.github.com/search/repositories?q=is:public&limi=1',
    headers: {
        "User-Agent": "request"
    }
};

app.get('/', (req, res) => {

    dataretrival(urlLink, (error, data) => {
        if (error) {
            return res.send(error);
        }

        // const myRes = data
        // const pythonData = myRes.filter((lan) => lan.language === 'JavaScript')


        // const forksData = pythonData.filter((key) => key.forks >= 200)


        // res.send(pythonData);
    })

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});