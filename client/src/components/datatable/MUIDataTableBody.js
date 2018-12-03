import React from 'react';
import ProductForm from '../products/ProductForm'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const renderTableBody = props => {
  return(
    props.data.map((row, index) => {
      // render normal row
      if(props.editIndex !== index){
        return renderNormalRow(props, row, index);
      }

      // render edit product row
      else{
        return(
          <TableRow key={row._id}>
            <TableCell colSpan={6}>
              <ProductForm 
                onSubmitProduct={props.onEditComplete} 
                form="editProductForm"
                row={row}
                index={index}
                initialValues={row}
              />
            </TableCell>
          </TableRow>
        )
      }
    })
  );
}

const renderNormalRow = (props, row, index) => {
  return (
    <TableRow key={row._id}>
      {props.columns.map(column => {
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
          {props.canEdit ? 
            <IconButton
              onClick={() => props.onEdit(index)}
            >
              <EditIcon />
            </IconButton> 
            : null}

          {props.canDelete ? 
            <IconButton
              onClick={() => props.onDelete(index)}
            >
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

export default MUIDataTableBody;