import React, { Component } from 'react';
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

const BlockList = props => {
  const {
    blockPagination,
    blocks,
    onPageChange
  } = props;

  return (
    <div className="block-list">
      <Toolbar>
        <Typography
          className="block-list__header"
          type="subheading"
        >
          Blocks {blocks.length && ` ${ blocks[blocks.length - 1].number } - ${ blocks[0].number }`}
        </Typography>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Date Mined</TableCell>
            <TableCell>Txns</TableCell>
            <TableCell>Uncles</TableCell>
            <TableCell className="limit-80">Miner</TableCell>
            <TableCell>Gas Used</TableCell>
            <TableCell>Gas Limit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          blocks && blocks.map((block) => (
            <TableRow key={block.number}>
              <TableCell className="limit-80">
                <Link to={`/block/${ block.number }`}>
                  <Button color="primary">{block.number}</Button>
                </Link>
              </TableCell>
              <TableCell>{getDisplayDate(block.timestamp)}</TableCell>
              <TableCell>
                <Link to={`/transactions?block=${block.number}`}>
                  <Button color="primary">{block.transactions.length}</Button>
                </Link>
              </TableCell>
              <TableCell className="limit-80">{block.uncles.length}</TableCell>
              <TableCell className="limit-80">{block.miner}</TableCell>
              <TableCell className="limit-80">{`${block.gasUsed} (${(block.gasUsed / block.gasLimit * 100).toFixed(2)}%)`}</TableCell>
              <TableCell>{block.gasLimit}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
        <TableFooter>
          <TableRow>
            <PageNavigation
              pagination={blockPagination}
              onPageChange={onPageChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );

  function getDisplayDate(timestamp) {
    return moment(timestamp * 1000).format('MM/DD/YY kk:mm:ss');
  }
};

export default BlockList;