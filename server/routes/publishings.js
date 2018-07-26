let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');
let _ = require('lodash');

let mockDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data_src/publishings.json')));

module.exports = (io) => {

    /* Create namespace for socket */
    let nsp = io.of('/publications');

    nsp.on('connection', (socket) => {
        console.log('user connected to publications nsp');
    });


    /* RESTful publishings */
    router.get('/', (req, res) => {
        res.json(mockDB);
    });

    router.post('/', (req, res) => {
        /* Store the new item */
        mockDB.push(req.body);

        /* Notify the name space */
        nsp.emit('new', req.body);

        /* Close the request */
        res.json({
            result: 'ok'
        });
    });

    router.get('/publication/:mongo_id', (req, res) => {
        let query = _.find(mockDB, {
            id: req.params.mongo_id
        });

        if (_.isObject(query)) {
            res.json(query);
        } else {
            res.status(404).end();
        }

    });

    router.put('/publication/:mongo_id', (req, res) => {
        /* TODO: update single item */
        let query = _.find(mockDB, {
            id: req.body.id
        });

        _.each(req.body, (value, key) => {
            /* should match proprties */
            query[key] = value;
        });

        /* Notify the name space */
        nsp.emit('update', req.body);

        res.json({
            result: 'ok'
        });
    });

    router.delete('/publication/:mongo_id', (req, res) => {
        /* delete single item */
        _.remove(mockDB, (row) => {
            return row.id === req.params.mongo_id;
        });

        /* Notify the name space */
        nsp.emit('delete', req.params.mongo_id);

        res.json({
            result: 'ok'
        });
    });

    return router;
};
