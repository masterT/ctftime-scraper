const yoloScraper = require('yolo-scraper')
const schema = require('../schemas/team.json')
const url = require('url')
const BASE_URL = 'https://ctftime.org/'

module.exports = yoloScraper.createScraper({

  request: function (teamId) {
    this.teamId = teamId
    return url.resolve(BASE_URL, `/team/${encodeURIComponent(teamId)}`)
  },

  extract: function (response, body, $) {
    const team = {}
    // Name.
    let name = $('meta[property="og:title"]').attr('content')
    team.name = name.replace('CTFtime.org / ', '')
    // Url.
    team.url = url.resolve(BASE_URL, `/team/${encodeURIComponent(this.teamId)}`)
    // Description.
    let description = $($('.span12')[0]).text()
    team.description = description
    // Country.
    let country = $('.page-header img').attr('alt')
    team.country = country
    // Writeups.
    team.writeups = this.extractWriteups($)
    console.log(team)
    return team
  },

  extractWriteups: function ($) {
    const table = $('#writeup_list_table')
    return $(table).find('tr').toArray().slice(1).map((tr) => {
      const tds = $(tr).children()
      return {
        eventName: $(tds[0]).text(),
        eventUrl: url.resolve(
          BASE_URL,
          $(tds[0]).find('a').attr('href')
        ),
        taskName: $(tds[1]).text(),
        tasktUrl: url.resolve(
          BASE_URL,
          $(tds[1]).find('a').attr('href')
        ),
        url: url.resolve(
          BASE_URL,
          $(tds[2]).find('a').attr('href')
        ),
        id: $(tds[2]).find('a').attr('href').replace(/\D/g, '')
      }
    })
  },

  schema
})
