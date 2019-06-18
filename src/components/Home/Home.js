import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Categories from '../Categories';
import Products from '../Products';


export const Home = (props) => {
  let selectedCategory;
  if(props.match && props.match.params && props.match.params.categoryId) {
    selectedCategory = props.match.params.categoryId;
  }

  return (
    <div>
      <Categories categoryId={selectedCategory} />
      <Products categoryId={selectedCategory} />
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  )

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string
    })
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
