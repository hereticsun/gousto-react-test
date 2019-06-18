import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { fetchCategories } from '../../actions/categories';
import './Categories.css';

export class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderList() {
    return this.props.categories.map((category) => {
      const activeCategory = this.props.categoryId;
      const isActive = category.id === activeCategory;
      return (
        <li
            key={category.id}
            className={
              `categories__category ${isActive ? 'categories__category--active' : ''}`
            }
        >
            <Link to={`/${category.id}`} className="categories__category-link" style={{fontWeight: isActive ? 'bold' : null}}>
              {category.title}
            </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="categories">
        <h2 className="categories__heading">Categories:</h2>
        {this.props.categories.length > 0 ? (
          <ul className="categories__list">
              {this.renderList()}
          </ul>
        ) : null}
      </section>  
      );
  }
}

function mapStateToProps(state) {
  return {
      categories: state.categories
  };
}

Categories.propTypes = {
  categoryId: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      box_limit: PropTypes.number,
      is_default: PropTypes.bool,
      recently_added: PropTypes.bool,
      hidden: PropTypes.bool,
      pivot: PropTypes.shape({
        created_at: PropTypes.string,
      }),
    })),
};

export default connect(mapStateToProps, { fetchCategories })(Categories);
