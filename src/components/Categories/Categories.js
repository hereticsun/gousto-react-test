import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories, selectCategory } from '../../actions/categories';
import './Categories.css';

export class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderList() {
    return this.props.categories.map((category) => {
      const activeCategory = this.props.selectedCategory.id;
      const isActive = category.id === activeCategory;
      const handleClick = () => {
        this.props.selectCategory(category);
        this.props.history.push(`/${category.id}`);
      };
    
      return (
        <li
            key={category.id}
            className={
              `categories__category ${isActive ? 'categories__category--active' : ''}`
            }
        >
            <button onClick={handleClick.bind(this)} className="categories__category-link" style={{fontWeight: isActive ? 'bold' : null}}>
              {category.title}
            </button>
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
      categories: state.categories,
      selectedCategory: state.selectedCategory
  };
}

Categories.propTypes = {
  selectedCategory: PropTypes.object,
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

export default withRouter(connect(mapStateToProps, { fetchCategories, selectCategory })(Categories));
