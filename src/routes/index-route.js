const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API SQLITE3",
        version: "0.0.1"
    });
});



// router.get('/', (req, res) => {
//     db.select().from('mynode.db').then(function(data) {
//         res.send(data);
//     });
// });

module.exports = router;

