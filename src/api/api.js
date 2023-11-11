/**
 * API 호출 함수
 * @param {string} method - HTTP 메서드 (GET, POST, DELETE)
 * @param {string} url - API 엔드포인트 URL. useData가 자동으로 생성.
 * @param {Object} postData - POST 요청 시 전송할 데이터
 * @returns {Promise<Object>} - API 응답을 나타내는 Promise 객체
 */

async function api(method, url, postData) {
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
