import {FETCH_DATA,NEW_DATA} from './types';
import axios from "axios";

export const fetchData = () => dispatch =>{
    axios.get("http://localhost:3001/api/getData")
      .then(res => dispatch({
          type: FETCH_DATA,
          payload: res
      }));
}

export const createData = (inputData) => dispatch =>{
    axios.post("http://localhost:3001/api/putData", {
      id: inputData.idLength,
      message: inputData.message
    })
    .then(data => dispatch({
        type: NEW_DATA,
        payload: data
    }));







}
