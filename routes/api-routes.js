const db = require('../models');

module.exports = function (app) {
// To get user
  app.get('/api/user', function (req, res) {
    db.user.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
//To post user
  app.post('/api/user', function (req, res) {
    db.user.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
//To get kudos
  app.get('/api/kudos', function (req, res) {
    db.kudos.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  //To post kudos
  app.post('/api/kudos', function (req, res) {
    db.kudos.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}