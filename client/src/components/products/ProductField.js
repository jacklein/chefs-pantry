import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginRight: theme.spacing.unit,
  }
})

const ProductField = ({ input, label, placeholder, meta: { error, touched }, classes }) => {
  return (
    <div className={label}>
      <TextField
        id={label}
        label={label}
        placeholder={placeholder}
        multiline
        className={classes.textsField}
        margin="normal"
        {...input}
      />
        <p style={{ marginBottom: '20px', color:'red' }}> 
          { touched && error } 
        </p>
    </div>
  );
};

export default withStyles(styles)(ProductField);