import React, { Component } from 'react'
import "./Styles/Styles.css"
import axios from "axios";


import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createData} from '../actions/dataActions'


class CUD extends Component {


    


    state = {
        id: 0,
        idLength: null,
        message: '',
        // idToDelete: null,
        // idToUpdate: null,
        // objectToUpdate: null

    }

    onChange = this.onChange.bind(this);
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = this.onSubmit.bind(this);
    async onSubmit(e){
        e.preventDefault();

       await this.getID();

      console.log(this.state.idLength);
        const newData = {
            id: this.state.id,
            idLength: this.state.idLength,
            message: this.state.message
        }

       this.props.createData(newData);
    }


    getID = async () => 
    await axios.get("http://localhost:3001/api/getData")
        .then(res =>
        {
      
      let arr_data = res.data.data

      let currentIds = arr_data.map(data => data.id);
      let idToBeAdded = 0;

      while (currentIds.includes(idToBeAdded)) {
        ++idToBeAdded;
      }

      

       this.setState({idLength: idToBeAdded})

  });


  


  render() {
    return (
      <div className="inputCenter">

        <form className="input-group mb-3" onSubmit={this.onSubmit}>
          <input 
            type="text" 
            className="form-control" 
            aria-describedby="basic-addon2"
            onChange={this.onChange} 
            name="message"
            value={this.state.message}
            placeholder="Add String"

          />

          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Add</button>
          </div>
        </form>


   
      </div>
    )
  }
}


CUD.propTypes = {
  createData: PropTypes.func.isRequired
}

export default connect(null,{createData})(CUD);

// putDataToDB = message => {
//   let currentIds = this.state.data.map(data => data.id);
//   let idToBeAdded = 0;
//   while (currentIds.includes(idToBeAdded)) {
//     ++idToBeAdded;
//   }

//   axios.post("http://localhost:3001/api/putData", {
//     id: idToBeAdded,
//     message: message
//   });
// };


      /* <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Recipient's username" 
          aria-label="Recipient's username" 
          aria-describedby="basic-addon2"

          type="text"
          onChange={e => this.setState({ idToDelete: e.target.value })}
          placeholder="ID of Item"

        />

        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button"
            onClick={() => this.deleteFromDB(this.state.idToDelete)}>Delete</button>
        </div>
      </div> */
      

        








        /* <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div> */     




// our delete method that uses our backend api 
  // to remove existing database information
  // deleteFromDB = idTodelete => {
  //   let objIdToDelete = null;
  //   this.state.data.forEach(dat => {


  //     if (dat.id == idTodelete) {
  //       console.log(dat.id)
  //       console.log(idTodelete)
  //       objIdToDelete = dat._id;
  //       console.log(objIdToDelete)


  //     }
  //   });

  //   axios.delete("http://localhost:3001/api/deleteData", {
  //     data: {
  //       id: objIdToDelete
  //     }
  //   });
  // };


  // our update method that uses our backend api
  // to overwrite existing data base information
  // updateDB = (idToUpdate, updateToApply) => {
  //   let objIdToUpdate = null;
  //   this.state.data.forEach(dat => {
  //     if (dat.id == idToUpdate) {
  //       objIdToUpdate = dat._id;
  //     }
  //   });

  //   axios.post("http://localhost:3001/api/updateData", {
  //     id: objIdToUpdate,
  //     update: { message: updateToApply }
  //   });
  // };
