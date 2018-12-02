import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class MUIDataTable extends Component{
  constructor(props){
    super(props);

    this.state = { index: null };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ index: null });
  }

  renderTableTitle(){
    return(
      <Toolbar>
        <div>
          <Typography>
            {this.props.title}
          </Typography>
        </div>
      </Toolbar>
    )
  }

  renderTableHead(){
    return(
      this.props.columns.map(column => {
        return (
          <TableCell 
            key={column.title}
            numeric={column.numeric}
          >
            {column.title}
          </TableCell>
        )
      })
    )
  }

  renderActionsCell(){
    if(this.props.canEdit || this.props.canDelete){
      return(
        <TableCell></TableCell>
      )
    }
  }

  renderTableBody() {
    return(
      this.props.data.map((row, index) => {
        // render normal row
        if(this.state.index !== index){
          return(
            this.renderNormalRow(row, index)
          )
        }
        // render edit row
      })
    );
  }

  renderNormalRow(row, index){
    return (
      <TableRow key={row._id}>
        {this.props.columns.map(column => {
          return(
            <TableCell key={column.cell} numeric={column.numeric}>
              {row[column.cell]}
            </TableCell>
          )
        })}
        {this.renderActionButtons(row, index)}
      </TableRow>
    );
  }

  renderActionButtons(row, index){
    if(this.props.canEdit || this.props.canDelete){
      return(
        <TableCell>
          <div style={{display: 'flex'}}>
            {this.props.canEdit ? 
              <IconButton
                onClick={() => this.onEdit(index)}
              >
                <EditIcon />
              </IconButton> 
              : null}

            {this.props.canDelete ? 
              <IconButton
                onClick={() => this.props.onDelete(index)}
              >
                <DeleteIcon />
              </IconButton>
              : null}
          </div>
        </TableCell>
      );
    }
  }

  onEdit(index){
    this.setState({ index })
  }

  render(){
    return(
      <Paper>
        {this.renderTableTitle()}
        <Table>
          <TableHead>
            <TableRow>
              {this.renderTableHead()}
              {this.renderActionsCell()}
            </TableRow>
          </TableHead>
          <TableBody>
              {this.renderTableBody()}
          </TableBody>
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