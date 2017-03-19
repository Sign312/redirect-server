let axios = require('axios')

function redirectDelete(url, query) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
                params: query
            })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

module.exports = redirectDelete