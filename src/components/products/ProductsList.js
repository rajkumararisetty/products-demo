import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';

const renderProducts = (products) => (
  products.details.map((product) => (
    <tr key={product._id}>
      <td>{product.name}</td>
      <td>{((product.quantity) / 1).toFixed(0)}</td>
      <td>{((product.price) / 1).toFixed(2)}</td>
      <td>{(product.price * product.quantity).toFixed(2)}</td>
    </tr>
  ))
);

// ProductsList component - represents the Products List
const ProductsList = ({products}) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-6">
          <h3>Products</h3>
        </div>
      </div>
      <Table>
        <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        {renderProducts(products)}
        </tbody>
      </Table>
      <div className="row float-right mr-1">
        Grand Total : {products.grandTotal}
      </div>
    </React.Fragment>
  );
};

ProductsList.propTypes = {
  products: PropTypes.object.isRequired
};

export default ProductsList;