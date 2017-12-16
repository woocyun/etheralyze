import React from 'react';
import Typography from 'material-ui/Typography';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const OverviewSummary = props => {
  const {
    priceData
  } = props;

  return (
    <div className="overview__summary">
      <Typography type="body2">
        <p>Ethereum Market Cap: { formatter.format(priceData.market_cap_usd).slice(0, -3) }</p>
        <p>Total Ethereum: { Number(priceData.available_supply).toFixed(0) }</p>
        <p>Price (USD): { formatter.format(priceData.price_usd) }</p>
        <p>Price (BTC): { priceData.price_btc }</p>
        <p>Value Change (Past 24 hours): { priceData.percent_change_24h }%</p>
      </Typography>
    </div>
  );
};

export default OverviewSummary;