import api from "@/api/api";
import { useEffect } from "react";
import { useState } from "react";

function useData(type, method, recipient_id, postData = null) {
  const [data, setData] = useState();

  useEffect(() => {
    (async function () {
      const result = await api(type, method);

      // 가공함수
      if (type === "RECIPIENTS") setData(() => getCardList(result));
    })();
  }, []);

  // return { ...data };
  return data;
}

export default useData;

//

const getCardList = (result) => {
  const { results } = result;
  return results;
};
