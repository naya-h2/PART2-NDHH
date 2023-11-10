import { ENDPOINTS, BASE_URL } from "./config";

async function api(type, method) {
  const url = BASE_URL + ENDPOINTS[type][method];
  // console.log(url);
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
