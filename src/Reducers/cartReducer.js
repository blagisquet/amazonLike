import { getCart} from '../Utils/storageCart';

const cartReducer = (state = getCart(), action) => {
  switch(action.type) {
    case "ADD_ARTICLE":
      return [...state, action.payload];
    case "REMOVE_ARTICLE":
      return [
        ...state.slice(0, action.payload), 
        ...state.slice(action.payload +1)
      ];
    default:
      return state;
  }
}

export default cartReducer;