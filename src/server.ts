import dotenv from 'dotenv'

import app from './app'

dotenv.config()

app
  .listen(process.env.PORT, (err) => {
    if (err) { console.error(err) }

    console.log(`Running on ${process.env.PORT}`)
  })
