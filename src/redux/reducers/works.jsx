const InitialState = {
    data: [
      'Get up early',
      'Have Breakfast',
      'Start coding'
    ],
  };
  
  const works = (state = InitialState, action) => {
    switch (action.type) {
      case 'ADD_WORKS':
        return { ...state, 
          data: [...state.data, action.title] 
        };
      case 'REMOVE_WORKS':
        return {
          ...state,
          data: [...action.works]
        }
      default:
        return state
    }
  }

export default works