import {
  UI_DRAWER_HIDE,
  UI_DRAWER_SHOW
} from "../actions/types";
const INITIAL_STATE = {
  drawerShown: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UI_DRAWER_SHOW:
      return { ...state, drawerShown: true };
    case UI_DRAWER_HIDE:
      return { ...state, drawerShown: false };
    default:
      return state;
  }
};
