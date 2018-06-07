import * as types from "../constants/actionTypes";
import * as initialState from "../constants/initialState";

export default (state = initialState.EVENTS, action) => {
  switch(action.type){
    case types.GET_EVENTS:
      return Object.assign([], action.payload);
    default:
      return state;
  }
}