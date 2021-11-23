import { useState, useCallback } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) throw new Error("something went wrong");

      const data = await response.json();
      // console.log(data);
      applyData(data);
    } catch (err) {
      setError(err.message);
    }
  }, []);
  return { error, sendRequest };
};

export default useHttp;
