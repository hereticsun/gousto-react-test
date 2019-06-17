import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts } from '../../actions/products';

export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderList() {
    return this.props.products.map((product) => {
      return (
        <li
          key={product.id}
          className="products__product"
        >
          {product.title}
        </li>
      );
    });
  }

  render() {
    return (
      <section className="products">
        <h2 className="products__heading">Products:</h2>
        {this.props.products.length > 0 && (
          <ul className="products__list">
            {this.renderList()}
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      sku: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      list_price: PropTypes.string,
      is_vatable: PropTypes.bool,
      is_for_sale: PropTypes.bool,
      age_restricted: PropTypes.bool,
      box_limit: PropTypes.number,
      always_on_menu: PropTypes.bool,
      volume: PropTypes.number,
      zone: PropTypes.string,
      created_at: PropTypes.string,
      categories: PropTypes.arrayOf(PropTypes.object),
      tags: PropTypes.array,
      images: PropTypes.shape({
        365: PropTypes.shape({
          src: PropTypes.string,
          url: PropTypes.string,
          width: PropTypes.number,
        }),
      }),
    })
  )
};

export default connect(mapStateToProps, { fetchProducts })(Products);
