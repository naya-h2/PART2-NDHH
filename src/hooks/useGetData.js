import { useState, useCallback, useEffect } from "react";
import actionResponse from "@/utils/api";

const useGetData = (type) => {
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    try {
      const result = await actionResponse(type, "GET");
      setData(result);
    } catch (error) {
      setData(null);
      console.error(error);
    }
  }, [type]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useGetData;
