import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Product.css';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  toggleDescription(){
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    const {product} = this.props;
    const isExpanded = this.state.isExpanded ? 'product__description--expanded' : '';
    return (
      <li
        key={product.id}
        className="product"
      >
        <button
          className="product__title" 
          style={{fontWeight: this.state.isExpanded ? 'bold' : null}}
          onClick={this.toggleDescription.bind(this)}>
          {product.title}
        </button>
        <div className={`product__description ${isExpanded}`}>
          <p>{product.description}</p>
        </div>
      </li>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
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
};

export default Product;
