export function tasksReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      return {
        tasks: [action.payload, ...state.tasks],
      };
    }
    case 'DELETE': {
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    }
    default:
      return state;
  }
}
