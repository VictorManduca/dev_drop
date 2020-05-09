import app from './app'

app
  .listen(process.env.PORT, (err) => {
    if (err) { console.error(err) }
  })
