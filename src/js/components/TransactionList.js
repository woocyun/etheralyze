import React from 'react';
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

const TransactionList = props => {
  return (
    <div className="transaction-list">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="limit-80">Hash</TableCell>
            <TableCell>Block</TableCell>
            <TableCell>Age</TableCell>
            <TableCell className="limit-80">From</TableCell>
            <TableCell className="limit-80">To</TableCell>
            <TableCell>Value (Ether)</TableCell>
            <TableCell>Fee (Ether)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          props.transactions.map((transaction) => (
            <TableRow key={transaction.hash}>
              <TableCell className="limit-80">{transaction.hash}</TableCell>
              <TableCell>{transaction.blockNumber}</TableCell>
              <TableCell>TODO</TableCell>
              <TableCell className="limit-80">{transaction.from}</TableCell>
              <TableCell className="limit-80">{transaction.to}</TableCell>
              <TableCell>{web3.fromWei(transaction.value, 'ether')}</TableCell>
              <TableCell>{web3.fromWei(transaction.gasPrice, 'ether')}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </div>
  )
};

export default TransactionList;