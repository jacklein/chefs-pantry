import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const renderTableHead = props => {
  return(
    props.columns.map(column => {
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

export default MUIDataTableHead;