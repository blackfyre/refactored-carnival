let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');
let _ = require('lodash');

/* There was no clear relation between the provided publication & reach info, so a hard-coded one has been created */
let mockDB = {
    '8a1330c93e31b8af013e360d6a2106ea': JSON.parse(fs.readFileSync(path.join(__dirname, '../../data_src/reach.json')))
};

module.exports = (io) => {

    /* Create namespace for socket */
    let nsp = io.of('/reach');

    nsp.on('connection', (socket) => {
        console.log('user connected to reach nsp');
    });

    router.post('/publication', (req, res) => {
        /* TODO: store new item */
        mockDB[req.body.mongo_id].push(req.body.content);

        nsp.emit('update', req.body.content);

        /* Close the request */
        res.json({
            result: 'ok'
        });
    });

    router.get('/publication/:mongo_id', (req, res) => {

        if (_.isArray(mockDB[req.params.mongo_id])) {
            res.json(mockDB[req.params.mongo_id]);
        } else {
            res.status(404).end();
        }

    });

    router.put('/publication/:mongo_id', (req, res) => {
        /* TODO: update single item */
        let query = _.find(mockDB[req.params.mongo_id], (item) => {

            return item['post_impressions'][0] == {
                'value': req.body.o['post_impressions'][0]['value'],
                'timestamp': req.body.o['post_impressions'][0]['timestamp']
            };
        });

        _.each(req.body.n, (value, key) => {
            query[key] = value;
        });

        nsp.emit('update', req.body.content);

        /* Close the request */
        res.json({
            result: 'ok'
        });

    });

    router.delete('/publication/:mongo_id', (req, res) => {
        /* delete single item */
        _.remove(mockDB[req.params.mongo_id], (row) => {
            return row['post_impressions'][0] == {
                'value': req.body.o['post_impressions'][0]['value'],
                'timestamp': req.body.o['post_impressions'][0]['timestamp']
            };
        });

        /* Notify the name space */
        nsp.emit('delete', req.body);

        res.json({
            result: 'ok'
        });
    });

    return router;
};
