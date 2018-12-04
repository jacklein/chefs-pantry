import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MUIDataTableHead from './MUIDataTableHead';
import MUIDataTableBody from './MUIDataTableBody'

class MUIDataTable extends Component{
  renderTableTitle(){
    return(
      <Toolbar>
        <div id="table-label">
          <Typography variant="h5">
            {this.props.title}
          </Typography>
        </div>
      </Toolbar>
    )
  }

  render(){
    return(
      <Paper>
        {this.renderTableTitle()}
        <Table>
          <MUIDataTableHead 
            columns={this.props.columns}
            canEdit={this.props.canEdit}
            canDelete={this.props.canDelete} 
          />

          <MUIDataTableBody
            columns={this.props.columns}
            data={this.props.data}
            canEdit={this.props.canEdit}
            canDelete={this.props.canDelete}
            onEdit={(index) => this.props.onEdit(index)}
            onDelete={(index) => this.props.onDelete(index)}
          />
        </Table>
      </Paper>
    )
  }
}

MUIDataTable.defaultProps = {
  columns: [],
  data: [],
  title: 'title',
  canEdit: true,
  canDelete: true,
  onSave: () => {},
  onDelete: () => {}
}

MUIDataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    numeric: PropTypes.bool
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  canEdit: PropTypes.bool,
  canDelete: PropTypes.bool,
  onSave: PropTypes.func,
  onDelete: PropTypes.func
}

export default MUIDataTable;