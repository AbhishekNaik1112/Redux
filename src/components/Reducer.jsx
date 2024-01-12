const initialState = {
  count: 0,
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        count: state.count + 1,
      };

    case "DISLIKE":
      return {
        count: Math.max(0, state.count - 1),
      };

    default:
      return state;
  }
};

export { likeReducer };
