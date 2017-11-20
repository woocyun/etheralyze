import { connect } from 'react-redux';

import { fetchAccount } from '../actions/AccountActions';
import Account from '../components/Account';

const mapStateToAccountProps = (state) => ({
  account: state.account
});

const mapDispatchToAccountProps = dispatch => ({
  onAccountSearch: account => {
    dispatch(fetchAccount(account));
  }
});

const AccountContainer = connect(
  mapStateToAccountProps,
  mapDispatchToAccountProps
)(Account);

export default AccountContainer;