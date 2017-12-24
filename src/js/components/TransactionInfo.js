import React from 'react';
import Web3 from 'web3';
import moment from 'moment';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Button from 'material-ui/Button';
import {
  Link
} from 'react-router-dom';
import Notification from './Notification';

const web3 = new Web3();

const TransactionInfo = props => {
  const {
    transaction,
    transactionHash
  } = props;

  return (
    <div className="transaction-info">
      {
        transaction ?
        <div>
          <Toolbar>
            <Typography
              type="subheading"
            >
              Transaction Info
            </Typography>
          </Toolbar>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Hash</TableCell>
                <TableCell>{transaction.hash}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Block Number</TableCell>
                <TableCell>{transaction.blockNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>From</TableCell>
                <TableCell>
                  {transaction.from}
                  {/* <Link to={`/account/${ transaction.from }`}>
                    <span className="link">{transaction.from}</span>
                  </Link> */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>To</TableCell>
                <TableCell>
                  {
                    transaction.to ?
                    // <Link to={`/account/${ transaction.to }`}>
                    //   <span className="link">{transaction.to}</span>
                    // </Link> :
                    transaction.to :
                    'Contract Creation'
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Value</TableCell>
                <TableCell>{web3.fromWei(transaction.value, 'ether')} Ether</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gas Limit</TableCell>
                <TableCell>{transaction.gas}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gas Price</TableCell>
                <TableCell>{transaction.gasPrice}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div> :
        <Notification
          color="red"
          message={`Transaction ${ transactionHash } does not exist.`}
        />
      }
    </div>
  );

  function getDisplayDate(timestamp) {
    return moment(timestamp * 1000).format('MM/DD/YY kk:mm:ss');
  }
};

export default TransactionInfo;