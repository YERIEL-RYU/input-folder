import * as actionTypes from '../actions/actionTypes';

const initialState = {
  status : false,
}
const actionUpload = (state, action) => ({
  ...state,
  status : true
})
const upload = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD:
      return actionUpload(state, action)
  
    default:
      return state
  }
}
export default upload;