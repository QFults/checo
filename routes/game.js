module.exports = (app, db, mongoose) => {
  // get all
  app.get('/games', (req, res) => {
    db.Game.find({})
      .then(r => res.json(r))
      .catch(e => res.json({ e: e }))
  })
  // get one
  app.get('/games/:id', (req, res) => {
    db.Game.findById(req.params.id)
      .populate('codes')
      .then(r => res.json(r))
      .catch(e => res.json({ e: e }))
  })
  // create one
  app.post('/games', (req, res) => {
    let game = req.body
    game._id = new mongoose.Types.ObjectId()
    db.Game.create(game)
      .then(r => res.json({ r: r }))
      .catch(e => res.json({ e: e }))
  })
  // update one
  app.put('/games/:id', (req, res) => {
    db.Game.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(r => res.json({ r: r }))
      .catch(e => res.json({ e: e }))
  })
  // delete one
  app.delete('/games/:id', (req, res) => {
    db.Game.findByIdAndRemove(req.params.id)
      .then(r => res.json({ r: r }))
      .catch(e => res.json({ e: e }))
  })
}
