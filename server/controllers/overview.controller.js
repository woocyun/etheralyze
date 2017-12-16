const axios = require('axios');

function getOverviewData(req, res) {
  axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/')
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.status(400).send({
        message: err.toString()
      });
    });
}

module.exports = {
  getOverviewData
};