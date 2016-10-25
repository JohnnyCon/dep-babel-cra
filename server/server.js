require("babel-polyfill");

const express = require('express')
const path    = require('path')
const app     = express()

app.use('/', express.static(path.join(__dirname, '../client/build')));


const routes = require('express').Router()

const some = async () => {
    console.log('nothing')
}

routes.get('/', (req, res) => {
  res.status(200).json( {message: 'babel + cra - blah'} )
})

app.use('/api', routes)

app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), () => {
  console.log('started on port', app.get('port'))
})
