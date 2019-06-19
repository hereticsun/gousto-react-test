import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../Product';
import SearchBar from '../SearchBar';
import { fetchProducts } from '../../actions/products';

export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  productList(){
    if(Boolean(this.props.selectedCategory.id)) {
      const filteredProducts = this.props.products.filter(
        product => product.categories.some(category => category.id === this.props.selectedCategory.id)
      );

      if(Boolean(this.props.searchTerm)) {
        const searchedProducts = filteredProducts.filter(
          product => {
            const lowerTitle = product.title.toLowerCase();
            const lowerDesc = product.description.toLowerCase();
            const q = this.props.searchTerm.toLowerCase();
            const test = lowerTitle.includes(q) || lowerDesc.includes(q);
            return test;
          }
        );
        return searchedProducts;
      }
      return filteredProducts;
    }
    if(Boolean(this.props.searchTerm)) {
      const searchedProducts = this.props.products.filter(
        product => {
          const lowerTitle = product.title.toLowerCase();
          const lowerDesc = product.description.toLowerCase();
          const q = this.props.searchTerm.toLowerCase();
          const test = lowerTitle.includes(q) || lowerDesc.includes(q);
          return test;
        }
      );
      return searchedProducts;
    }
    return this.props.products;
  }

  render() {
    const productHeading = Boolean(this.props.selectedCategory.title) ?
      `Products in ${this.props.selectedCategory.title}` :
      'Products';
    return (
      <section className="products">
        <h2 className="products__heading">{productHeading}</h2>
        <SearchBar />
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
      products: state.products,
      selectedCategory: state.selectedCategory,
      searchTerm: state.searchTerm,
  };
}

Products.propTypes = {
  selectedCategory: PropTypes.object,
  products: PropTypes.array,
  searchTerm: PropTypes.string,
};

export default connect(mapStateToProps, { fetchProducts })(Products);
