// @flow
import React from 'react'
import { Link } from 'react-router'

export default () => {
  return (
    <header>
      <Link to="/"><h2 className="site-title">Dropod</h2></Link>
      <nav className="primary">
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
