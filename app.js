var express = require('express');
const dataretrival = require('./data')
var app = express();


app.get('/', (req, res)=> {

    dataretrival((error, data)=> {
        if (error) {
            return res.send('Error: ', error);
        } 
         // const myRes = response.body.items
        // const pythonData = myRes.filter((lan) => lan.language === Python)

        // const forksData = pythonData.filter((key) => key.forks >= 200)
        res.send(data);
    })
    
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});