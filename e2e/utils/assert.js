const { expect } = require('chai')

const contains = (target, expected) => {
  try {
    expect(target).to.have.string(expected)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

const includes = (target, expected) => {
  try {
    expect(target).to.be.an('array').that.does.include(expected)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = {
  contains,
  includes
}
