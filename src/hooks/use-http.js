import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "pending",
      data: null,
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.responseData,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }
  return state;
};

const useHttp = (requestFn, initStatus = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: initStatus ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFn(requestData);
        dispatch({ type: "SUCCESS", responseData: responseData });
      } catch (err) {
        dispatch({
          type: "ERROR",
          errorMessage: err.message || "Something went wrong",
        });
      }
    },
    [requestFn]
  );
  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
