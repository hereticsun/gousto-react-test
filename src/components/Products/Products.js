import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../Product';
import { fetchProducts } from '../../actions/products';

export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  productList(){
    if(Boolean(this.props.categoryId)) {
      const filteredProducts = this.props.products.filter(
        product => product.categories.some(category => category.id === this.props.categoryId)
      );
      return filteredProducts;
    }
    return this.props.products;
  }

  render() {
    return (
      <section className="products">
        <h2 className="products__heading">Products:</h2>
        {this.props.products.length > 0 && (
          <ul className="products__list">
            {this.productList().map(product => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
        )}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
      products: state.products
  };
}

Products.propTypes = {
  categoryId: PropTypes.string,
  products: PropTypes.array,
};

export default connect(mapStateToProps, { fetchProducts })(Products);
