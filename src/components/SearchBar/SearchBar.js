import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchProducts } from '../../actions/products';

export class SearchBar extends Component {
  render() {
    const handleSearch = (e) => {
      this.props.searchProducts(e.target.value);
    };
    return (
      <form>
        <label htmlFor="searchInput">Search Products</label>
        <input 
          name="searchInput"
          id="searchInput"
          type="search"
          onChange={handleSearch.bind(this)}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
}

export default connect(mapStateToProps, { searchProducts })(SearchBar);
