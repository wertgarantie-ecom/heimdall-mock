const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.send({
            HEROKU_APP_ID: process.env.HEROKU_APP_ID,
            HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
            HEROKU_DYNO_ID: process.env.HEROKU_DYNO_ID,
            HEROKU_RELEASE_CREATED_AT: process.env.HEROKU_RELEASE_CREATED_AT,
            HEROKU_RELEASE_VERSION: process.env.HEROKU_RELEASE_VERSION,
            HEROKU_SLUG_COMMIT: process.env.HEROKU_SLUG_COMMIT,
            HEROKU_SLUG_DESCRIPTION: process.env.HEROKU_SLUG_DESCRIPTION
        })
    } catch (e) {
        next(e);
    }
});

module.exports = router;