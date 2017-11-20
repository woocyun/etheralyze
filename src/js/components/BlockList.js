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

const BlockList = props => {
  return (
    <div className="transaction-list">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="limit-80">Number</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Txns</TableCell>
            <TableCell className="limit-80">Uncles</TableCell>
            <TableCell className="limit-80">Gas Used</TableCell>
            <TableCell>Gas Limit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          props.blocks && props.blocks.map((block) => (
            <TableRow key={block.number}>
              <TableCell className="limit-80">{block.number}</TableCell>
              <TableCell>{block.timestamp}</TableCell>
              <TableCell>{block.transactions.length}</TableCell>
              <TableCell className="limit-80">{block.uncles.length}</TableCell>
              <TableCell className="limit-80">{block.gasUsed}</TableCell>
              <TableCell>{block.gasLimit}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </div>
  )
};

export default BlockList;