import * as actionTypes from './actionTypes';
import axios from 'axios';

export const upload = () => ({
  type: actionTypes.UPLOAD
});

export const getApi = (id) => {
  return async (dispatch)=>{
    await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response)=>console.log(response.data))
    .then(()=> dispatch(upload()))
    // .then(()=>resolve('complate'))
    // .catch(()=>reject('network error'))
    .catch(error=>console.log(error))
  }
} ;
