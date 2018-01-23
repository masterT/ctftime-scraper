const yoloScraper = require('yolo-scraper')
const schema = require('../schemas/writeup.json')
const url = require('url')
const BASE_URL = 'https://ctftime.org/'

module.exports = yoloScraper.createScraper({

  request: function (writeupId) {
    return url.resolve(BASE_URL, `/writeup/${writeupId}`)
  },

  extract: function (response, body, $) {
    const writeup = {}
    // Name.
    writeup.name = $('h2').text()
    // Original url.
    writeup.originalUrl = $('a[target="_new"]').attr('href')
    return writeup
  },

  schema
})
