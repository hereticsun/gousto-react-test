import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Categories from '../Categories';

export const Home = (props) => (
  <div>
    <Categories />
    <p>List products here</p>
  </div>
)

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
