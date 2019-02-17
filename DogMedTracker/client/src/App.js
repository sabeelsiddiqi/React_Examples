import React, { Component } from "react";

import Navbar from './components/Navbar'
import Header from './components/Header'
import Table from './components/Table'
import CUD from './components/CUD'


import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="background">
        <Navbar/>
        <div className="container background">

          <Header />
          <Table />
          <CUD />
        </div>
      </div>
    );
  }
}

export default App;