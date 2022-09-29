// Membuat HTTP dari sisi client yang mengirimkan request
import https from 'https'

const request = https.request('https://hookb.in/qBLKMGYWnOtEqJGEyzP0', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}, (response) => {
  // Ketika ada response masuk, tambahkan event listener
  response.addListener('data', (data) => {
    // Buffer -> String
    console.log(data.toString())
  })
})

const body = JSON.stringify({
  'firstName': 'Raihan',
  'lastName': 'Rakhman'
})

request.write(body)
request.end()
