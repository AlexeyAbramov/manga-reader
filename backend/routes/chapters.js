const express = require('express');

const router = express.Router({ mergeParams: true });

router.route('/').get((req, res) => {
  console.log(req.params);
});

module.exports = router;
