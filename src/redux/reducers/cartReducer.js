// reducers/cartReducer.js

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':

      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
           return state;
      }
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  