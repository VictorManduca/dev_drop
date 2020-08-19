'use strict'

import App from './app.js'
const app = new App().server

app.listen(8080, _ => console.log('Running on port 3333'))