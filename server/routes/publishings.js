let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');
let _ = require('lodash');

let mockDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data_src/publishings.json')));

/* TODO: load json as source once */

/* RESTful publishings */
router.get('/', (req, res) => {
    res.json(mockDB);
});

router.post('/', (req, res) => {
    /* TODO: store new item */
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
});

router.delete('/publication/:mongo_id', (req, res) => {
    /* TODO: delete single item */
});

module.exports = router;
