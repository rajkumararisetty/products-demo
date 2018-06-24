import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../common/index';
import ReactLoading from 'react-loading';
import { Form, Button } from 'reactstrap';

// ProductsForm component - represents the Product Form
export const ProductsForm = ({ product, onChange, saveFormSubmit, errors, addLoading }) => {
  return (
    <Form>
      <div className="row">
        <div className="form-group mx-auto">
          <h3>Add Product</h3>
        </div>
      </div>
      <TextInput name="name"
                 label="Name*:"
                 placeholder="Enter Name"
                 value={product.name}
                 onChange={onChange}
                 error={errors.name}
      />
      <TextInput name="quantity"
                 label="Quantity*:"
                 placeholder="Enter Quantity"
                 type="number"
                 value={product.quantity}
                 onChange={onChange}
                 error={errors.quantity}
      />
      <TextInput name="price"
                 label="Price*:"
                 placeholder="Enter Price"
                 type="number"
                 value={product.price}
                 onChange={onChange}
                 error={errors.price}
      />
      {addLoading ? <ReactLoading className="float-right" type="spin" color="#444"  height={30} width={30} /> :
        <Button
          className="info float-right"
          onClick={saveFormSubmit}
        >
          Add
        </Button>}
    </Form>
  );
};

ProductsForm.propTypes = {
  errors: PropTypes.object,
  product: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  saveFormSubmit: PropTypes.func.isRequired,
  addLoading: PropTypes.bool,
};
