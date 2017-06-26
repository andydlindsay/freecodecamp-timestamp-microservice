const express = require('express'),
      router = express.Router(),
      datejs = require('datejs'),
      moment = require('moment');

// convert time or unix timestamp
router.get('/:time', (req, res) => {

      const returnObj = {
            'unix': null,
            'natural': null
      };
      const timeParam = req.params.time;
      console.log('isNaN():', isNaN(timeParam));
      if (isNaN(timeParam)) {
            // date is string
            const m = moment(timeParam);
            if (m.isValid()) {
                  returnObj.unix = m.unix();
                  returnObj.natural = m.format('MMMM D, YYYY');
            }
      } else {
            // date is number
            const m = moment(Number(timeParam) * 1000);
            if (m.isValid()) {
                  returnObj.unix = m.unix();
                  returnObj.natural = m.format('MMMM D, YYYY');
            }
      }
      res.send(returnObj);

});

// export router
module.exports = router;
