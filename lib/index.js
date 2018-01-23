// const yoloScraper = require('yolo-scraper')
const getTeam = require('./scrapers/get-team.js')

exports.getTeam = function (teamId) {
  return new Promise((resolve, reject) => {
    getTeam(teamId, (error, data) => {
      console.log(data)
      if (error) return reject(error)
      resolve(data)
    })
  })
}
