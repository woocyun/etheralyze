import React from 'react';

import TextFieldSubmit from './TextFieldSubmit';

const Account = (props) => {
  return (
    <div>
      <TextFieldSubmit
        onAccountSearch={props.onAccountSearch}
      />
    </div>
  );
};

export default Account;