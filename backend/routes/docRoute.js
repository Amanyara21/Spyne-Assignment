const express = require('express');
const router = express.Router();


router.get('/api/docs', (req, res) => {
    res.redirect('https://documenter.getpostman.com/view/YOUR_DOCUMENTATION_ID');
});

module.exports=router