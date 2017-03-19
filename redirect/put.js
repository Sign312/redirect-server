let axios = require('axios')

function redirectPut(url, data) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

module.exports = redirectPut