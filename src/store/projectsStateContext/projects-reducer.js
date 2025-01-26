export function projectsReducer(state, action) {
  switch (action.type) {
    case 'START_ADD': {
      return {
        projects: [...state.projects],
        selectedProjectId: null,
      };
    }
    case 'ADD': {
      return {
        projects: [
          ...state.projects,
          { id: action.payload.projectId, ...action.payload.project },
        ],
        selectedProjectId: undefined,
      };
    }
    case 'CLOSE': {
      return {
        projects: [...state.projects],
        selectedProjectId: undefined,
      };
    }
    case 'OPEN': {
      return {
        projects: [...state.projects],
        selectedProjectId: action.payload.projectId,
      };
    }
    case 'DELETE': {
      return {
        projects: state.projects.filter(
          project => project.id !== action.payload.projectId,
        ),
        selectedProjectId: undefined,
      };
    }
  }
}
