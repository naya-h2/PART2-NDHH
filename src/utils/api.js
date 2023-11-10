const BASE_URL = "https://rolling-api.vercel.app/";

const URLS = {
  BACKGROUND_IMGS: BASE_URL + "background-images/", // 배경 이미지 받아오기
  PROFILE_IMGS: BASE_URL + "profile-images/", // 프로필 이미지 설정
  // MESSAGES: BASE_URL + `1-7/messages/${id}`, // id에 해당하는 메세지 객체 삭제

  // RECIPIENTS: BASE_URL + "1-7/recipients/", // 새로운 대상객체 (To.~~) 생성 or 리스트에서 조회 시 사용
  // RECIPIENTS_ID: BASE_URL + `1-7/recipients/${id}`, // 해당 아이디 객체에 대한 편지, 반응들 조회 or 삭제
  // RECIPIENTS_MESSAGES: BASE_URL + `1-7/recipients/recipients/${recipient_id}/messages/`, // 롤링 페이퍼 대상에게 남기는 메세지 데이터를 저장 - 메세지 작성할 때 사용 / 대상에게 보낸 메세지 목록 조회
  // RECIPIENTS_REACTIONS: BASE_URL + `1-7/recipients/recipients/${recipient_id}/reactions/`,
};

const actionResponse = async (type, method, postData = null) => {
  const url = URLS[type];
  switch (method) {
    case "GET":
      const getResponse = await fetch(url);
      if (!getResponse.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      const getData = await getResponse.json();
      // return { type: `${type}`, payload: getData };
      return getData;

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

    default:
      throw new Error("GET, POST, DELETE 중 하나를 입력해주세요");
  }
};

export default actionResponse;
