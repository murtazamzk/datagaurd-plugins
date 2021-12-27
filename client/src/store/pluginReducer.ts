import type { AppState, ActionType } from "../types";

import { ActionTypes } from "../constants";

const pluginReducer = (state: AppState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_PLUGINS_DATA: {
      return [
        ...action.data,
      ];
    }
    default:
      return state;
  }
};

export default pluginReducer;
