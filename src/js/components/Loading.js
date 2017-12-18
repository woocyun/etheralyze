import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

const Loading = props => {
  return (
    <div className="loading" style={{ textAlign: 'center', padding: '10%' }}>
       <CircularProgress size={50} />
    </div>
  );
};

export default Loading;