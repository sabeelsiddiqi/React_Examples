import React, { Component } from 'react'
import "./Styles/Styles.css"
import randyImg from '../img/randyPic.gif'

 class Header extends Component {
  render() {
    return (
      <div className="centerText">
            <h1>Randy's Apoquel® Tracker</h1>
            <img class="imgPadding" alt="Randy Pic" src={randyImg}/>
            <h4>Has Randy been given Apoquel® today?</h4>
                <h5>Yes @ 5:45pm</h5>
      </div>
    )
  }
}

export default Header