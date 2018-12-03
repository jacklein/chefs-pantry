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
    <div>
      <TextField
        id="standard-textarea"
        label={label}
        placeholder={placeholder}
        multiline
        className={classes.textField}
        margin="normal"
        {...input}
      />
      <div style={{ marginBottom: '20px' }}>
        { touched && error }
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductField);