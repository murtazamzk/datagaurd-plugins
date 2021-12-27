import { useReducer, useEffect, useState } from "react";

/**
 * checks whether backend has sent an error
 * @param status status code of api call
 */
const hasError = (status: number): boolean => {
  const ERROR_HEADERS = [400, 403, 405, 500];
  return ERROR_HEADERS.includes(status);
};

const ACTIONS = {
  TRIGGER_API_CALL: "TRIGGER_API_CALL",
  LOG_ERROR: "LOG_ERROR",
  LOG_SUCCESS_RESPONSE: "LOG_SUCCESS_RESPONSE",
};

const initialState = {
  url: "",
  method: "",
  data: "",
  response: null,
  success: true,
  loading: true,
  error: "",
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOG_ERROR:
      return {
        ...state,
        loading: false,
        response: {},
        success: false,
        error: action.errMsg || "Something went wrong. Try again later.",
      };

    case ACTIONS.TRIGGER_API_CALL:
      return {
        ...state,
        loading: true,
        url: action.url,
        method: action.method,
        data: action.data,
        success: false,
        error: false,
        response: null,
      };

    case ACTIONS.LOG_SUCCESS_RESPONSE:
      return {
        ...state,
        loading: false,
        response: action.response,
        success: true,
        error: "",
      };

    default:
      return state;
  }
};

// Actions
const apiActions = (dispatch, state) => ({
  // Trigger API Call
  triggerAPICall: (url: string, method: string, data?: any): void => {
    dispatch({
      type: ACTIONS.TRIGGER_API_CALL,
      url,
      method,
      data,
    });
  },

  // Log Success Response
  logSuccessResponse: (response?: any): void => {
    dispatch({
      type: ACTIONS.LOG_SUCCESS_RESPONSE,
      response,
    });
  },

  // Log Error
  logError: (errMsg?: string): void => {
    dispatch({
      type: ACTIONS.LOG_ERROR,
      errMsg,
    });
  },

  // #endregion
});

const useAPI = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = apiActions(dispatch, state);

  const { url, method, data, response, loading, success, error } = state;

  const get = (url: string): void => {
    if (url) {
      actions.triggerAPICall(url, "GET");
    }
  };

  const post = (url: string, data?: any): void => {
    if (url) {
      actions.triggerAPICall(url, "POST", data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const headers: any = { "Content-Type": "application/json" };
      const request = new Request(url, {
        method,
        headers: new Headers(headers),
        cache: "default",
        body: method !== "GET" && data ? JSON.stringify(data) : undefined,
      });

      let resp;

      try {
        resp = await fetch(request);
      } catch (e) {
        actions.logError(e);
        return;
      }

      try {
        const contentType = resp.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const json = await resp.json();

          if (!json) {
            actions.logError();
            return;
          }

          if (
            hasError(resp.status) ||
            (json.success !== undefined && json.success === false) ||
            (json.status !== undefined && json.status === false)
          ) {
            actions.logError(json.error);
            return;
          }

          actions.logSuccessResponse(json);
        } else {
          actions.logError();
          return;
        }
      } catch (e) {
        actions.logError(e);
        return;
      }
    };

    if (url && method) {
      fetchData();
    }
  }, [url, method, data]);

  return { get, post, response, success, loading, error };
};

export default useAPI;