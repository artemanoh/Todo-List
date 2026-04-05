import { ACTION_TYPES } from "./constants";

// reducer.js: Логіка обробки (мозок нашого проекту).
const todos = [
  { id: 0, text: "Написати на редакс", completed: false },
  { id: 1, text: "Написати на редакс", completed: false },
  { id: 2, text: "Написати на редакс", completed: false },
];

const todosReducer = (state = todos, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return [...state, action.payload];
    case ACTION_TYPES.remove:
      return state.filter(todos => todos.id !== action.id);
    case ACTION_TYPES.change:
      return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)

    default:
      return state;
  }
};

export default todosReducer;
