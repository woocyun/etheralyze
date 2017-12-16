import React from 'react';
import Typography from 'material-ui/Typography';

const Notification = props => {
  return (
    <div className="notification">
      <Typography className="val" type="subheading" style={{ color: props.color || '#000' }}>
        {props.message}
      </Typography>
    </div>
  );
};

export default Notification;