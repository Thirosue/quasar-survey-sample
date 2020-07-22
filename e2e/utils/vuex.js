const vuex = page => page.evaluate(() => {
  return JSON.parse(sessionStorage.getItem('vuex')).form.values
})

module.exports = vuex
