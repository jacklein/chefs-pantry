import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const renderTableBody = props => {
  return(
    _.map(props.data, (row, index) => {
      // render normal row
      return renderNormalRow(props, row, index);
    })
  );
}

const renderNormalRow = (props, row, index) => {
  return (
    <TableRow key={row._id}>
      {_.map(props.columns, column => {
        return(
          <TableCell key={column.cell} numeric={column.numeric}>
            {row[column.cell]}
          </TableCell>
        )
      })}
      {renderActionButtons(props, index)}
    </TableRow>
  );
}

const renderActionButtons = (props, index) => {
  if(props.canEdit || props.canDelete){
    return(
      <TableCell>
        <div style={{display: 'flex'}}>
          {props.canEdit
            ? <IconButton onClick={() => props.onEdit(index)}>
                <EditIcon />
              </IconButton> 
            : null}

          {props.canDelete
            ? <IconButton onClick={() => props.onDelete(index)} >
                <DeleteIcon />
              </IconButton>
            : null}
        </div>
      </TableCell>
    );
  }
}

const MUIDataTableBody = props => {
  return(
    <TableBody>
      {renderTableBody(props)}
    </TableBody>
  )
}

MUIDataTableBody.defaultProps = {
  columns: [],
  data: [],
  canEdit: true,
  canDelete: true,
  onSave: () => {},
  onDelete: () => {}
}

MUIDataTableBody.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    numeric: PropTypes.bool
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  canEdit: PropTypes.bool,
  canDelete: PropTypes.bool,
  onSave: PropTypes.func,
  onDelete: PropTypes.func
}

export default MUIDataTableBody;