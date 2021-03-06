var db = require('../config/database');

var api = {}

api.add = function (req, res) {
    var event = req.body;
    delete event._id;
    db.insert(event, function (err, newDoc) {
        if (err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });
};

api.find = function (req, res) {
    db.findOne({ _id: req.params.eventId }, function (err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.update = function (req, res) {
    console.log('Parâmetro recebido:' + req.params.eventId);
    db.update({ _id: req.params.eventId }, req.body, function (err, numReplaced) {
        if (err) return console.log(err);
        if (numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });
};

api.list = function (req, res) {
    db.find({}).sort({ titulo: 1 }).exec(function (err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.remove = function (req, res) {

    db.remove({ _id: req.params.eventId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if (numRemoved) res.status(200).end();
        res.status(500).end();
    });
};


module.exports = api;