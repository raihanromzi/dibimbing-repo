const _ = require('lodash')
console.log(_.chunk([1, 2, 3, 4], 2))

const map = _.map([2, 4, 6], value => {
    return value ** 2
})
console.log(map)