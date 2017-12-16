import React from 'react';
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

const BlockInfo = props => {
  const {
    block
  } = props;

  return (
    <div className="block-info">
      {
        block ?
        <div>
          <Toolbar>
            <Typography
              type="subheading"
            >
              Block {block.number}
            </Typography>
          </Toolbar>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>{block.number}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Date mined</TableCell>
                <TableCell>{getDisplayDate(block.timestamp)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Transactions</TableCell>
                <TableCell>
                  {
                    block.transactions && 
                    (
                      block.transactions.length > 0 ?
                      <Link to={`/transactions?block=${ block.number }`}>
                        <span className="link">{block.transactions && block.transactions.length}</span>
                      </Link> :
                      block.transactions.length
                    )
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hash</TableCell>
                <TableCell>{block.hash}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Parent Hash</TableCell>
                <TableCell>{block.parentHash}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sha3 Uncles</TableCell>
                <TableCell>{block.sha3Uncles}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Miner</TableCell>
                <TableCell>{block.miner}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Difficulty</TableCell>
                <TableCell>{block.difficulty}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Difficulty</TableCell>
                <TableCell>{block.totalDifficulty}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Size</TableCell>
                <TableCell>{block.size}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gas Used</TableCell>
                <TableCell>{block.gasUsed}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gas Limit</TableCell>
                <TableCell>{block.gasLimit}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nonce</TableCell>
                <TableCell>{block.nonce}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Extra Data</TableCell>
                <TableCell>{block.extraData}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div> :
        <Notification
          color="red"
          message={`Block ${ props.blockNumber } does not exist.`}
        />
      }
    </div>
  );

  function getDisplayDate(timestamp) {
    return moment(timestamp * 1000).format('MM/DD/YY kk:mm:ss');
  }
};

export default BlockInfo;