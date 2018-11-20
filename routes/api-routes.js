const db = require('../models');
module.exports = function (app) {

    //to get users
    app.get('/api/users', function (req, res) {
        db.User.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
  
    //to get kudos cards
    app.get('/api/kudos', function (req, res) {
        db.kudos.find({})
            .populate('from')
            .populate('to')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    //to post kudos cards 
    app.post('/api/kudos', function (req, res) {
        db.kudos.create(req.body)
            .then(function (userData) {
                res.json(userData);
            }).catch(function (err) {
                res.json(err);
            });
    });
}