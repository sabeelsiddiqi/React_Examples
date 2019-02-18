import React, { Component } from 'react'
import "./Styles/Styles.css"

import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions'

class Table extends Component {
    // state ={
    //     data : [],
    //     intervalIsSet: false,
    // }


    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has 
    // changed and implement those changes into our UI
    componentDidMount() {
        this.props.fetchData();



        // this.getDataFromDb();
        // if (!this.state.intervalIsSet) {
        // let interval = setInterval(this.getDataFromDb, 10000);
        // this.setState({ intervalIsSet: interval });
        // }
    }

    // never let a process live forever 
    // always kill a process everytime we are done using it
    // componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //     clearInterval(this.state.intervalIsSet);
    //     this.setState({ intervalIsSet: null });
    //     }
    // }

    // our first get method that uses our backend api to 
    // fetch data from our data base
    // getDataFromDb = () => {
    //     axios.get("http://localhost:3001/api/getData")
    //     .then(res => this.setState({ data : res.data.data.reverse() }));
    // };


  render() {


    return (
      <div>
        
        <table className="table" data-toggle="table" data-sort-name="date" data-sort-order="desc">
              <thead>
                <tr>
                  <th scope="col">ID #</th>
                  <th scope="col">TimeStamp</th>
                  <th scope="col">Text</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.data.map(
                    data => (
                        <tr key={data.id}> 
                          <th scope="row">{data.id}</th>
                          <td>{data.createdAt} </td>
                          <td>{data.message}</td>
                        </tr>
                    )
                  )}
              </tbody>
            </table>

      </div>
    )
  }
}

Table.propTypes = {
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  data: state.data.items
});

export default connect(mapStateToProps,{fetchData})(Table)