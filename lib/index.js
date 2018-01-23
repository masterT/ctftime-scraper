const getTeam = require('./scrapers/get-team.js')
const getWriteup = require('./scrapers/get-writeup.js')

exports.getTeam = function (id) {
  return new Promise((resolve, reject) => {
    getTeam(id, (error, data) => {
      if (error) return reject(error)
      resolve(data)
    })
  })
}

exports.getWriteup = function (id) {
  return new Promise((resolve, reject) => {
    getWriteup(id, (error, data) => {
      if (error) return reject(error)
      resolve(data)
    })
  })
}
