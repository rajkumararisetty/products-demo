import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { ProductsForm } from './ProductsForm';
import ProductList from './ProductsList';
import { ValidationRules } from './ValidationRules';
import FormValidator from '../../validations/FormValidator';
import * as ProductCrudActions from "../../actions/products/CrudActions";

// Product component - represents the Product Form and List
class Products extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        _id:'',
        name: '',
        quantity: '',
        price:''
      },
      listLoading: false,
      errors: {}
    };

    this.validator = new FormValidator(ValidationRules);
    this.onChangeProduct = this.onChangeProduct.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChangeProduct = (event) => {
    event.preventDefault();
    const field = event.target.name;
    const newProduct = Object.assign({}, this.state.product);
    newProduct[field] = event.target.value;
    this.setState(
      {product: newProduct},
      () => this.validateEachInput(field, newProduct[field])
    );
    return true;
  };

  validateEachInput = (field, value) => {
    let validationStatus = this.validator.validateInput(field, value, this.state);
    const errors = Object.assign({}, this.state.errors);
    errors[field] = '';
    if (!validationStatus.isValid) {
      errors[field] = validationStatus.message;
    }

    this.setState({
      errors: errors
    });
    return true;
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const {product} = this.state;
    const {addProduct} = this.props;
    this.setState((prevState) => ({
      addLoading: !prevState.addLoading
    }), () => {
      let validationStatus = this.validator.validateForm(product);
      if (!validationStatus.isValid) {
        this.setState((prevState) => ({
          errors: validationStatus.errors,
          addLoading: !prevState.addLoading
        }));
        return true;
      } else {
        addProduct(product);
        this.setState((prevState) => ({
          addLoading: !prevState.addLoading,
          product: {
            _id:'',
            name: '',
            quantity: '',
            price:''
          }
        }));
        toast.success("Product Added", {
          position: toast.POSITION.TOP_CENTER, autoClose: 1000
        });
      }
    });

    return true;
  };

  render = () => {
    const { product, errors, addLoading } = this.state;
    const { products } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <ProductsForm product={product}
                          saveFormSubmit={this.onFormSubmit}
                          onChange={this.onChangeProduct}
                          errors={errors}
                          addLoading={addLoading}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <ProductList products={products} />
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  products: state.ProductCrudReducer,
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(ProductCrudActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Products);
