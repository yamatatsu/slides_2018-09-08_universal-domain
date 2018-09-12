import { actionTypes } from "phenyl-todo-core";
import NavigationService from "../app/navigation-service";

export default store => next => action => {
  const ret = next(action);

  const params = map(store, action);
  params && NavigationService.navigate(params);

  return ret;
};

function map(store, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS: {
      return "TodoList"
    }
    /* others */
    default:
      break;
  }
  return null;
};
