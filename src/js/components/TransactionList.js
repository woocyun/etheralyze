import React, { Component } from 'react';
import Web3 from 'web3';
import moment from 'moment';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import PageNavigation from './PageNavigation';

const web3 = new Web3();

const TransactionList = props => {
  const {
    transactionPagination,
    transactions,
    onPageChange
  } = props;

  return (
    <div className="block-list">
      <Toolbar>
        <Typography
          className="block-list__header"
          type="subheading"
        >
          Transactions
        </Typography>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="limit-80">Hash</TableCell>
            <TableCell>Block</TableCell>
            <TableCell className="limit-80">From</TableCell>
            <TableCell className="limit-80">To</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          transactions && transactions.map((transaction) => (
            <TableRow key={transaction.hash}>
              <TableCell className="limit-80">{transaction.hash}</TableCell>
              <TableCell>{transaction.blockNumber}</TableCell>
              <TableCell className="limit-80">{transaction.from}</TableCell>
              <TableCell className="limit-80">{transaction.to}</TableCell>
              <TableCell>{web3.fromWei(transaction.value, 'ether')} Ether</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
        <TableFooter>
          <TableRow>
            <PageNavigation
              pagination={transactionPagination}
              onPageChange={onPageChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );

  function getDisplayDate(timestamp) {
    return moment(timestamp * 1000).format('MM/DD/YY kk:mm');
  }
};

export default TransactionList;