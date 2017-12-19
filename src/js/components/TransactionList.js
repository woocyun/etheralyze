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
import {
  Link
} from 'react-router-dom';
import Notification from './Notification';

const web3 = new Web3();

const TransactionList = props => {
  const {
    transactionPagination,
    transactions,
    changePage,
    onAccountClick = () => () => {},
    header = 'Transactions'
  } = props;

  return (
    <div className="block-list">
      {
        transactions instanceof Error ?
        <Notification
          color="red"
          message={`There was an error retrieving transactions.`}
        /> :
        (
          transactions && transactions.length === 0 ?
          <Notification
            color="red"
            message={`No transactions exist for this query.`}
          /> :
          <div>
            <Toolbar>
              <Typography
                className="block-list__header"
                type="subheading"
              >
                {header}
              </Typography>
            </Toolbar>
            <Table className="no-uppercase">
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
                    <TableCell className="limit-80">
                      <Link to={`/transaction/${ transaction.hash }`}>
                        <Button color="primary">{transaction.hash}</Button>
                      </Link>
                    </TableCell>
                    <TableCell>{transaction.blockNumber}</TableCell>
                    <TableCell className="limit-80">
                      <Link to={`/account/${ transaction.from }`}>
                        <Button
                          color="primary"
                          onClick={onAccountClick(transaction.from)}
                        >
                          {transaction.from}
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell className="limit-80">
                      {
                        transaction.to ?
                        <Link to={`/account/${ transaction.to }`}>
                          <Button
                            color="primary"
                            onClick={onAccountClick(transaction.to)}
                          >
                            {transaction.to}
                          </Button>
                        </Link> :
                        'Contract Creation'
                      }
                    </TableCell>
                    <TableCell>{web3.fromWei(transaction.value, 'ether')} Ether</TableCell>
                  </TableRow>
                ))
              }
              </TableBody>
              {
                transactionPagination &&
                <TableFooter>
                  <TableRow>
                    <PageNavigation
                      pagination={transactionPagination}
                      onPageChange={changePage}
                    />
                  </TableRow>
                </TableFooter>
              }
            </Table>
          </div>
        )
      }
    </div>
  );

  function getDisplayDate(timestamp) {
    return moment(timestamp * 1000).format('MM/DD/YY kk:mm');
  }
};

export default TransactionList;