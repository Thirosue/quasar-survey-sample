const next = page => {
  return Promise.all([
    page.waitForNavigation(),
    page.click('.primary-btn')
  ])
}

module.exports = next
