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

class BlockList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 10,
      rowsPerPageOptions: [10]
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.paginationLabel = this.paginationLabel.bind(this);
  }

  getDisplayDate(timestamp) {
    return moment(timestamp * 1000).format('MM/DD/YY kk:mm');
  }

  handleChangePage(evt, page) {
    this.setState({ page });
    this.props.onPageChange(page, this.state.rowsPerPage);
  }

  handleChangeRowsPerPage(arg, arg2) {
    console.log(arg, arg2);
  }

  paginationLabel({ from, to, count }) {
    return `Page ${ this.state.page + 1 } of ${ parseInt(count / this.state.rowsPerPage) }`;
  }

  render() {
    const {
      blockPagination,
      blocks
    } = this.props;

    return (
      <div className="block-list">
        <Toolbar>
          <Typography
            className="block-list__header"
            type="subheading"
          >
            Blocks
            {
              blocks.length && ` ${ blocks[blocks.length - 1].number } - ${ blocks[0].number }`
            }
          </Typography>
          {
            this.state.page === 0 &&
            <Button>First Blocks</Button>
          }
          {
            this.state.page === 'last' &&
            <Button>Latest Blocks</Button>
          }
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
                <TableCell className="limit-80">{block.number}</TableCell>
                <TableCell>{this.getDisplayDate(block.timestamp)}</TableCell>
                <TableCell>{block.transactions.length}</TableCell>
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
              <TablePagination
                count={blockPagination.total - 1}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                rowsPerPageOptions={this.state.rowsPerPageOptions}
                labelDisplayedRows={this.paginationLabel}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default BlockList;