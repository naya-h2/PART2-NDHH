// const BASE_URL = "https://rolling-api.vercel.app/";

// const checkUrls = (type, path = "") => {
//   if (type === "BACKGROUND_IMGS") return BASE_URL + "background-images/"; // 배경 이미지 받아오기
//   if (type === "PROFILE_IMGS") return BASE_URL + "profile-images/"; // 프로필 이미지 설정
//   if (type === "MESSAGES") return BASE_URL + `1-7/messages/${path}`; // id에 해당하는 메세지 객체 삭제
//   if (type === "RECIPIENTS") return BASE_URL + "1-7/recipients/"; // 새로운 대상객체 (To.~~) 생성 or 리스트에서 조회 시 사용
//   if (type === "RECIPIENTS_ID") return BASE_URL + `1-7/recipients/${path}`; // 해당 아이디 객체에 대한 편지, 반응들 조회 or 삭제
//   if (type === "RECIPIENTS_MESSAGES") return BASE_URL + `1-7/recipients/recipients/${path}/messages/`; // 롤링 페이퍼 대상에게 남기는 메세지 데이터를 저장 - 메세지 작성할 때 사용 / 대상에게 보낸 메세지 목록 조회
//   if (type === "RECIPIENTS_REACTIONS") return BASE_URL + `1-7/recipients/recipients/${path}/reactions/`;
// };
import { useState } from "react";
import { ENDPOINTS, BASE_URL } from "./config";
import { useEffect } from "react";

async function api(type, method) {
  const url = BASE_URL + ENDPOINTS[type][method];

  switch (method) {
    case "GET":
      const getResponse = await fetch(url);
      if (!getResponse.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      const result = await getResponse.json();
      return result;
    case "POST":
      const postResponse = await fetch(url, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!postResult.ok) {
        throw new Error("데이터 전송에 실패했습니다.");
      }
      const postResult = await postResponse.json();
      return postResult;

    case "DELETE":
      const deleteResponse = await fetch(url, {
        method: "DELETE",
      });
      if (!deleteResponse.ok) {
        throw new Error("데이터 삭제에 실패했습니다.");
      }
      break;

    default:
      throw new Error("GET, POST, DELETE 중 하나를 입력해주세요");
  }
}

export default api;
