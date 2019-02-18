import React, { Component } from "react";

import Navbar from './components/Navbar'
import Header from './components/Header'
import Table from './components/Table'
import CUD from './components/CUD'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {Provider} from 'react-redux'

import store from './store'

class App extends Component {
  render() {    
    return (
      <Provider store={store}>
        <div className="background">
          <Navbar/>
          <div className="container background">
            <Header />
            <Table />
            <CUD />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;