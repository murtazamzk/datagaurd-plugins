import type { AppState, ActionType } from "../types";

import React, { createContext, useReducer, Dispatch } from "react";
import navReducer from "./navReducer";
import pluginReducer from "./pluginReducer";

// Initial State
const initialState = {
    navItems: null,
    plugins: null
};

// Main App Context
const AppContext = createContext<{
    state: AppState;
    dispatch: Dispatch<ActionType>;
}>({
    state: initialState,
    dispatch: () => null,
});

// Root Reducer - Combines all the reducers
const rootReducer = (
    { navItems, plugins }: AppState,
    action: ActionType
) => {
    return {
        navItems: navReducer(navItems, action),
        plugins: pluginReducer(plugins, action)
    };
};

// Main App Provider
const AppProvider: React.FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };