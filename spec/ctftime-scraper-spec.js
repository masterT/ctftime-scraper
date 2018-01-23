/* eslint-env jasmine */
const ctftime = require('../lib/index.js')

describe('ctftime-scraper', () => {
  describe('team-scraper', () => {
    it('scrape the team', (done) => {
      ctftime.getTeam('32119')
        .then((team) => {
          expect(team.name).toEqual('The Northern Coalition')
          expect(team.url).toEqual('https://ctftime.org/team/32119/')
          expect(team.description).toContain('students')
          expect(team.description).toContain('Québec')
          expect(team.country).toContain('CA')
          expect(team.writeups.length).toBeGreaterThan(0)
        })
        .catch((error) => {
          expect(error).toEqual(null)
        })
        .then(() => done())
    })
  })
})
