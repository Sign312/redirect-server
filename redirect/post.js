let axios = require('axios')

function redirectPost(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

module.exports = redirectPost