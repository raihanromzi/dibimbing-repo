const users = require('../../db/users')

module.exports = (req, res) => {
  try {
    res
      .json(users)
      .status(200)
  } catch (e) {
    res
      .send('Error')
      .status(500)
  }
}