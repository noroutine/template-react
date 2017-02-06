import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/' onlyActiveOnIndex={true}>
            Home
          </Link>
          <Link to='/about'>
            About Us
          </Link>
        </nav>
        {this.props.children}
        <nav>
          <span>© {new Date().getFullYear()} noroutine.me</span>
          <Link to='/tos'>Terms of Service</Link>
          <Link to='/privacy'>Privacy Policy</Link>
        </nav>
      </div>
    )
	}
}

