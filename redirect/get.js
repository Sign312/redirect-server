let axios = require('axios')

function redirectGet(url, query) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: query
            })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

module.exports = redirectGet