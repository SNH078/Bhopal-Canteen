const INIT_STATE = {
  carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    //  Add to cart
    case "ADD_CART": {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        const updatedCarts = [...state.carts];
        updatedCarts[itemIndex].qnty += 1;

        return {
          ...state,
          carts: updatedCarts
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp]
        };
      }
    }

    //  Remove entire item from cart
    case "RMV_CART": {
      const updatedCarts = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: updatedCarts
      };
    }

    //  Remove one quantity
    case "RMV_ONE": {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        const updatedCarts = [...state.carts];

        if (updatedCarts[itemIndex].qnty > 1) {
          updatedCarts[itemIndex].qnty -= 1;
          return {
            ...state,
            carts: updatedCarts
          };
        } else {
          // Quantity is 1, remove the item
          const filteredCarts = updatedCarts.filter((el) => el.id !== action.payload.id);
          return {
            ...state,
            carts: filteredCarts
          };
        }
      }
      return state;
    }

    default:
      return state;
  }
};
