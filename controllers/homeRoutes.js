// Import just the router express
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('events');
});

router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;