const { ActionTypes } = require("../containers/action-types");

const initialState = {
  products: [
    {
      id: 1,
      title: "this title",
      category: "programmer",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

      break;

    default:
      return state;
      break;
  }
};
