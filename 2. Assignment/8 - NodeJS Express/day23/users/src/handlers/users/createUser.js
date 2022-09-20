const users = require('../../db/users')

module.exports = (req, res) => {
  try {
    const { fullName, userName, address } = req.body
    if (
      !fullName
      || !userName
      || !address) {
      res
        .send('Please Send Complete Data')
        .status(400)
    } else {
      const newUser = {
        fullName,
        userName,
        address
      }
      users.push(newUser)

      const isSuccess = users.filter((user) => user.fullName === fullName).length > 0
      if (isSuccess) {
        res
          .send('New user is added')
          .status(201)
      }
    }
  } catch (e) {
    res
      .send('Error')
      .status(500)
  }
}