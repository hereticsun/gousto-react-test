import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Categories from '../Categories';
import Products from '../Products';


export const Home = (props) => {

  return (
    <div>
      <Categories />
      <Products />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
