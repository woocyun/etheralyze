import React, { Component } from 'react';
import { TableCell } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import {
  ChevronRight,
  ChevronLeft,
  FirstPage,
  LastPage
} from 'material-ui-icons';
import queryString from 'query-string';

class PageNavigation extends Component {
  constructor(props) {
    super(props);

    const currentPage = queryString.parse(location.search).page;

    this.state = {
      page: currentPage ? Number(currentPage) : 1,
      pageSpecified: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleFirstPage = this.handleFirstPage.bind(this);
    this.handleLastPage = this.handleLastPage.bind(this);
    this.handleSpecifyPage = this.handleSpecifyPage.bind(this);
    this.disableSpecifyButton = this.disableSpecifyButton.bind(this);
  }

  handleFirstPage() {
    this.setState({
      page: 1
    });

    this.props.onPageChange(1);
  }

  handleLastPage() {
    this.setState({
      page: parseInt(this.props.pagination.total / this.props.pagination.perPage) + 1
    });

    this.props.onPageChange(parseInt(this.props.pagination.total / this.props.pagination.perPage) + 1);
  }

  handlePrevPage() {
    this.setState(prevState => ({
      page: prevState.page - 1
    }));

    this.props.onPageChange(this.state.page - 1);
  }

  handleNextPage() {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));

    this.props.onPageChange(this.state.page + 1);
  }

  handleInputChange(evt) {
    this.setState({
      pageSpecified: evt.target.value
    });
  }

  handleSpecifyPage() {
    const pageSpecified = Number(this.state.pageSpecified);

    this.setState({
      page: pageSpecified
    });

    this.props.onPageChange(pageSpecified);
  }

  disableSpecifyButton() {
    const pageSpecified = Number(this.state.pageSpecified);
    if (!this.state.pageSpecified) return true;
    if (isNaN(pageSpecified)) return true;
    if (pageSpecified < 1) return true;
    if (pageSpecified > parseInt(this.props.pagination.total / this.props.pagination.perPage) + 1) return true;
    return false;
  }

  render() {
    const {
      pagination
    } = this.props;

    const {
      page
    } = this.state;

    return (
      <TableCell className="page-navigation" numeric={true} colSpan={9001}>
        <div>
          <div className="page-navigation__arrows">
            <IconButton
              disabled={page <= 1}
              onClick={this.handleFirstPage}
            >
              <FirstPage />
            </IconButton>
            <IconButton
              disabled={page <= 1}
              onClick={this.handlePrevPage}
            >
              <ChevronLeft />
            </IconButton>
            <span className="text">
              Page {page} of {parseInt(pagination.total  / pagination.perPage) + 1}
            </span>
            <IconButton
              disabled={page >= (parseInt(pagination.total / pagination.perPage) + 1)}
              onClick={this.handleNextPage}
            >
              <ChevronRight />
            </IconButton>
            <IconButton
              disabled={page >= (parseInt(pagination.total / pagination.perPage) + 1)}
              onClick={this.handleLastPage}
            >
              <LastPage />
            </IconButton>
          </div>
          <div className="page-navigation__specific">
            <Button
              disabled={this.disableSpecifyButton()}
              onClick={this.handleSpecifyPage}
              raised
              dense>
              Go to:
            </Button>
            <TextField
              id="number"
              label="Page"
              value={this.state.pageSpecified}
              onChange={this.handleInputChange}
              type="text"
              margin="normal"
            />
          </div>
        </div>
      </TableCell>
    );
  }
}

export default PageNavigation;