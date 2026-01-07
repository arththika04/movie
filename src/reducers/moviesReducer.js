export const moviesInitialState = [];

export function moviesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), title: action.title, watched: false },
      ];
    case "TOGGLE_WATCHED":
      return state.map((m) =>
        m.id === action.id ? { ...m, watched: !m.watched } : m
      );
    case "REMOVE":
      return state.filter((m) => m.id !== action.id);
    default:
      return state;
  }
}
