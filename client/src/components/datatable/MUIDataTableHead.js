import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const renderTableHead = props => {
  return(
    _.map(props.columns, column => {
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

const renderActionsCell = props => {
  if(props.canEdit || props.canDelete){
    return(
      <TableCell></TableCell>
    )
  }
}

const MUIDataTableHead = props => {
  return(
    <TableHead>
      <TableRow>
        {renderTableHead(props)}
        {renderActionsCell(props)}
      </TableRow>
    </TableHead>
  )
}

MUIDataTableHead.defaultProps = {
  columns: [],
  canEdit: true,
  canDelete: true
}

MUIDataTableHead.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    numeric: PropTypes.bool
  })).isRequired,
  canEdit: PropTypes.bool,
  canDelete: PropTypes.bool
}

export default MUIDataTableHead;