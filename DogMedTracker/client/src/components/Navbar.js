import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar">
            <span class="navbar-brand mb-0 h1">R&amp;R Inc.</span>
            <button type="button" class="btn-success">Admin</button>
        </nav>
      </div>
    )
  }
}
export default Navbar