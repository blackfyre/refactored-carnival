let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');
let _ = require('lodash');

/* There was no clear relation between the provided publication & reach info, so a hard-coded one has been created */
let mockDB = {
    '8a1330c93e31b8af013e360d6a2106ea': JSON.parse(fs.readFileSync(path.join(__dirname, '../../data_src/reach.json')))
};

router.post('/publication', (req, res) => {
    /* TODO: store new item */
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
});

router.delete('/publication/:mongo_id', (req, res) => {
    /* TODO: delete single item */
});

module.exports = router;
