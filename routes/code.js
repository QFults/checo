module.exports = (app, db, mongoose) => {
  // get all
  app.get('/codes', (req, res) => {
    db.Code.find({})
      .then(r => res.json(r))
      .catch(e => res.json({ e: e }))
  })
  // get one
  app.get('/codes/:id', (req, res) => {
    db.Code.findById(req.params.id)
      .then(r => res.json(r))
      .catch(e => res.json({ e: e }))
  })
  // create one
  app.post('/codes/:id', (req, res) => {
    let code = req.body
    code._id = new mongoose.Types.ObjectId()
    db.Code.create(code)
      .then(r => {
        db.Game.findByIdAndUpdate(req.params.id, { $push: { codes: code._id } })
          .then(r1 => res.json({ r: r }))
          .catch(e => res.json({ e: e }))
      })
      .catch(e => res.json({ e: e }))
  })
  // update one
  app.put('/codes/:id', (req, res) => {
    db.Code.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(r => res.json({ r: r }))
      .catch(e => res.json({ e: e }))
  })
  // delete one
  app.delete('/codes/:id', (req, res) => {
    db.Code.findByIdAndRemove(req.params.id)
      .then(r => res.json({ r: r }))
      .catch(e => res.json({ e: e }))
  })
  app.post('/seed/:id', (req, res) => {
    let codes = require('../seed/codes').map(code => {
      code._id = new mongoose.Types.ObjectId()
      return code
    })
    codes.forEach(code => {
      db.Code.create(code)
        .then(r => {
          db.Game.findByIdAndUpdate(req.params.id, { $push: { codes: code._id } })
        })
    })
  })
}
