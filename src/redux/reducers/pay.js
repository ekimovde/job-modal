const initialState = {
  status: "delivery",
};

const pay = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PAY:SET_PAY":
      return {
        ...state,
        status: payload,
      };
    default:
      return state;
  }
};

export default pay;
