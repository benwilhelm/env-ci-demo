const app = require('express')()

const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'development'

app.get('/', (req, res, next) => {
  res.send(`Hello!`)
})

app.get('/environment', (req, res, next) => {
  res.send(`This is the ${NODE_ENV} environment`)
})

if (module === require.main) {
  app.listen(PORT, (e) => {
    if (e) throw e;
    console.log(`Silly little server listening on port ${PORT}`)
  })
}

module.exports = app
