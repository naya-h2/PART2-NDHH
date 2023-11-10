import api from "@/api/api";
import { BASE_URL, ENDPOINTS } from "@/api/config";
import { useEffect } from "react";
import { useState } from "react";

/**
 * 데이터를 가져오는 커스텀 훅
 * @param {string} type - 데이터 종류 (예: "RECIPIENTS", "RECIPIENTS_MESSAGES")
 * @param {string} method - HTTP 메서드 (GET, POST, DELETE)
 * @param {Number} path - id or recipient_id 값 (해당 식별자로 엔드포인트 경로 찾음)
 * @param {Object} postData - POST 요청 시 전송할 데이터 (기본값: null)
 *@returns {Object|null} - 가져온 데이터 또는 null (초기값)
 */

function useData(type, method, path, postData = null) {
  const [data, setData] = useState();

  useEffect(() => {
    (async function () {
      // url 생성
      const endpoint = ENDPOINTS[type][method];
      const url = typeof endpoint === "function" ? BASE_URL + endpoint(path) : BASE_URL + endpoint;

      const result = await api(method, url, postData);

      if (["RECIPIENTS", "RECIPIENTS_MESSAGES"].includes(type)) setData(() => transformData(result));
      if (["RECIPIENTS_ID", "BACKGROUND_IMGS", "PROFILE_IMGS", "MESSAGES"].includes(type)) setData(result);
    })();
  }, []);

  return data;
}

export default useData;

/**
 * API 응답에서 데이터를 가공하는 함수
 * @param {Object} result - API 응답 객체
 * @returns {Array|null} - 가공된 데이터 또는 null
 */

const transformData = (result) => {
  const { results } = result;
  return results;
};
