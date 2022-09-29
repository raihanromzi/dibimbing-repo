const samplePromise = () => {
  return Promise.resolve('Hello')
}

samplePromise()
  .then((response) => console.log(response))