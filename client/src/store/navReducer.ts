import type { AppState, ActionType } from "../types";

import { ActionTypes } from "../constants";

const navReducer = (state: AppState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_NAV_DATA: {
      return [
        ...action.data,
      ];
    }
    default:
      return state;
  }
};

export default navReducer;
