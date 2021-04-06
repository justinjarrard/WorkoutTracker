module.exports = require('mongoose').connect('mongodb://localhose/workouttrackerdb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})