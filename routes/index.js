const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const myUser = {name: 'Kara',
                  age: 31}
//  res.send('Hey! It works!');
    res.json(myUser);
});

module.exports = router;
