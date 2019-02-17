import React, { Component } from "react";
import './App.css';

import Navbar from './components/Navbar'
import Header from './components/Header'
import Table from './components/Table'
import CUD from './components/CUD'


import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">

          <Header />
          <Table />
          <CUD />
        </div>
      </div>
    );
  }
}

export default App;