import _ from 'lodash';
import { connect } from 'react-redux';
import { resetForm } from '../../actions'
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';

import ProductField from './ProductField';
import formFields from './formFields';

class ProductForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type, placeholder }) => {
      return (
        <Field
          key={name}
          component={ProductField}
          type={type}
          label={label}
          placeholder={placeholder}
          name={name}
        />
      );
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmitProduct)} >
          <div style={{display:'flex'}}>
            {this.renderFields()}
          </div>
          <Button type="submit" style={{paddingLeft: '0'}}>
            Save
          </Button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, required }) => {
    if(!values[name] && required) {
      errors[name] = 'You must provide a value';
    }
  });

  // count field must be a number
  if(values['count'] && !parseFloat(values['count'])) {
    errors['count'] = 'This field must be a number';
  }

  return errors;
}

ProductForm = reduxForm({
  enableReinitialize : true,
  validate
})(ProductForm);

export default ProductForm;