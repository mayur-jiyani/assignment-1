const request = require('request')
const urlLink = {
    url: 'https://api.github.com/search/repositories?q=is:public&limi=1',
    headers: {
        "User-Agent": "request"
    }
};

const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const dataretrival = (urlLink, callback) => {

    request({ url: urlLink.url, headers: urlLink.headers, json: true }, (error, response) => {

        if (error) {
            callback(error)
        } else {
            let data = [], stargazersData = [];

            response.body.items.forEach(item => {
                if (item.language === 'JavaScript' && item.forks_count >= 100) {
                    dataforks = {
                        name: item.name,
                        lang: item.language,
                        description: item.description,
                        html_url: item.html_url,
                        watchers_count: item.watchers_count,
                        stargazers_count: item.stargazers_count,
                        forks_count: item.forks_count
                    }

                    data.push(dataforks)
                    // callback(data)

                    if (item.stargazers_count > 500) {
                        stargazers = { name: item.name, lang: item.language, description: item.description, html_url: item.html_url, watchers_count: item.watchers_count, stargazers_count: item.stargazers_count, forks_count: item.forks_count }
                        stargazersData.push(stargazers)

                    }
                }


            })
            callback(stargazersData)
        }
    })
}
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
    if (msg) {
        console.log(msg)
    } if (msg.length > 0) {
        csvWriting.writeRecords(msg).then(() => {
            console.log('...Done');
        });

    } else {
        console.log('data is unavailable');
    }
})
// module.exports = dataretrival