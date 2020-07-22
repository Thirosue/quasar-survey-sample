import * as ctx from '../../../../quasar.conf.js' // eslint-disable-line 

describe('画面遷移確認', () => {
  beforeEach(() => {
    cy.visit('/#/Q1')
  })
  it('(assert)タイトルが正常に設定されていること', () => {
    cy.title().should('include', 'Q1')
  })
})

describe('バリデーションの確認', () => {
  beforeEach(() => {
    cy.visit('/#/Q1')
  })

  it('(given)項目が未選択のまま、(when)次へを押した場合、(then)注意文言が表示され先へ進めないこと', () => {
    cy.get('[data-cy=next]').click()
    cy.get('.q-validation-error').contains('してください')
    cy.location().should((loc) => {
      expect(loc.hash).to.contains('Q1')
    })
  })
})

describe('画面遷移の確認', () => {
  beforeEach(() => {
    cy.visit('/#/Q1')
  })

  it('(given)「見たことがない」を選択し、(when)次へを押した場合、(then)formに値が設定されて次へ進むこと', () => {
    cy.get('[aria-label="見たことがない"]').click()
    cy.get('[data-cy=next]').click()
    cy.window().then((win) => {
      var form = JSON.parse(win.sessionStorage.getItem('vuex')).form
      expect(form.values.haveSeen).to.eq('0')
    })
    cy.location().should((loc) => {
      expect(loc.hash).to.contains('Q2')
    })
  })
})
