import { ShopPageActionTypes } from "./shop.types";


const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}
  

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ShopPageActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopPageActionTypes.FETCH_COLLECTIONS_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopPageActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}


export default shopReducer;