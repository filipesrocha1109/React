
const mongoose = require('mongoose')
mongoose.promise = global.promise
module.exports = mongoose.connect('mongodb://localhost/todo',  { useUnifiedTopology: true } )
