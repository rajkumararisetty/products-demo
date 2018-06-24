import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { CommonPureComponent } from '../hoc/CommonPureHOC';

// TextInput component - reusable form component
class TextInput extends PureComponent {
  render = () => {
    const { name, label, placeholder, value, onChange, error, type='text' } = this.props;
    return (
      <FormGroup>
        <Label for={label}>{label}</Label>
        <Input type={type}
               name={name}
               placeholder={placeholder}
               value={value}
               className="form-control"
               onChange={onChange}
               invalid={!!error} />
        {error && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    );
  }
}

TextInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default CommonPureComponent(TextInput);
