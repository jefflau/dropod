// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  props: {
    config: Object
  }

  render(){

    return (
      <div className="home">
        <h1>Home page for dropod</h1>
      </div>
    )
  }
}


const mapStateToProps = ({ config }) => ({ config })

export default connect(mapStateToProps)(Home)
