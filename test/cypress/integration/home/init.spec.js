import * as ctx from '../../../../quasar.conf.js' // eslint-disable-line 

describe('Landing', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('.should() - assert that <title> is correct', () => {
    cy.title().should('include', 'アンケート')
  })
})
