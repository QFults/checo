module.exports = (app, db, mongoose) => {
  require('./game')(app, db, mongoose)
  require('./code')(app, db, mongoose)
}
