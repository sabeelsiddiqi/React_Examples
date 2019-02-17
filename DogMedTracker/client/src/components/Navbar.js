import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
            <span className="navbar-brand mb-0 h1">R&amp;R Inc.</span>
            <button type="button" className="btn-success">Admin</button>
        </nav>
      </div>
    )
  }
}
export default Navbar