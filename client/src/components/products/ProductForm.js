import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';

import ProductField from './ProductField';
import formFields from './formFields';

class ProductForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={ProductField}
          type={type}
          label={label}
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
          <Button type="submit">
            Save
          </Button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, type, required }) => {
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

export default reduxForm({
  validate,
  form: 'productForm',
})(ProductForm);