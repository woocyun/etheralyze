import React from 'react';
import moment from 'moment';
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

const BlockList = props => {
  return (
    <div className="block-list">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Txns</TableCell>
            <TableCell>Uncles</TableCell>
            <TableCell className="limit-80">Miner</TableCell>
            <TableCell>Gas Used</TableCell>
            <TableCell>Gas Limit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          props.blocks && props.blocks.map((block) => (
            <TableRow key={block.number}>
              <TableCell className="limit-80">{block.number}</TableCell>
              <TableCell>{moment(block.timestamp * 1000).fromNow()}</TableCell>
              <TableCell>{block.transactions.length}</TableCell>
              <TableCell className="limit-80">{block.uncles.length}</TableCell>
              <TableCell className="limit-80">{block.miner}</TableCell>
              <TableCell className="limit-80">{`${block.gasUsed} (${(block.gasUsed / block.gasLimit * 100).toFixed(2)}%)`}</TableCell>
              <TableCell>{block.gasLimit}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </div>
  );
};

export default BlockList;