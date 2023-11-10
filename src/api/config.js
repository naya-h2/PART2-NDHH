export const BASE_URL = "https://rolling-api.vercel.app";
export const TEAM = "1-7";
const id = 1; // 일단 고정//

export const ENDPOINTS = {
  BACKGROUND_IMGS: {
    // 배경 이미지 받아오기 -> create page
    GET: "/background-images/",
  },
  PROFILE_IMGS: {
    // 프로필 이미지 설정 -> message page
    GET: "/profile-images/",
  },
  MESSAGES: {
    // id에 해당하는 메세지 객체 삭제
    DELETE: `/${TEAM}/messages/${id}/messages_delete/`,
  },
  RECIPIENTS: {
    // 새로운 대상객체 (To.~~) 생성 or 리스트에서 조회 시 사용 ->
    GET: `/${TEAM}/recipients/`, // 메세지를 받는 사람(To ~~) 목록 -- CardList 컴포넌트 [OK]
    POST: `/${TEAM}/recipients/`, // 새 수신자를 생성 -> To 생성
  },
  RECIPIENTS_ID: {
    // 해당 아이디 객체에 대한 편지, 반응들 조회 or 삭제
    GET: (id) => `/${TEAM}/recipients/${id}/`,
    DELETE: (id) => `/${TEAM}/recipients/${id}/`,
  },
  RECIPIENTS_MESSAGES: {
    // 롤링 페이퍼 대상에게 남기는 메세지 데이터를 저장 - 메세지 작성할 때 사용 / 대상에게 보낸 메세지 목록 조회
    GET: (recipientId) => `/${TEAM}/recipients/${recipientId}/messages/`,
    POST: (recipientId) => `/${TEAM}/recipients/${recipientId}/messages/`,
  },
  RECIPIENTS_REACTIONS: {
    GET: (recipientId) => `/${TEAM}/recipients/${recipientId}/reactions/`,
    POST: (recipientId) => `/${TEAM}/recipients/${recipientId}/reactions/`,
  },
};
