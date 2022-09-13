const sum = (...nums) => {
  return nums.reduce((a, b) => a + b, 0)
}

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
}

// Only change code below this line
const { today: { low: lowToday }, tomorrow: { high: highToday } } = LOCAL_FORECAST
// Only change code above this line

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
}

const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys']
}

function makeList(arr) {
  // Only change code below this line
  const failureItems = []

  for (let i = 0; i < result.failure.length; i++) {
    failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
  }
  // Only change code above this line

  return failureItems
}

const failuresList = makeList(result.failure)

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return { name, age, gender }
  // Only change code above this line
}
