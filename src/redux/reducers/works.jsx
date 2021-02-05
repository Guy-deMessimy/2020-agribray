const InitialState = {
  nature: "",
  image1: "",
};

const works = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_WORKS":
      return { ...state, nature: action.title };
    case "REMOVE_WORKS":
      return {
        ...state,
        data: [...action.works],
      };
    default:
      return state;
  }
};

export default works;
