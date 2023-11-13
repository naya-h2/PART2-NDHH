export const BASE_URL = "https://rolling-api.vercel.app";
export const TEAM = "1-7";
// const id = 296;
// const recipientId = 213;

export const ENDPOINTS = {
  BACKGROUND_IMGS: {
    // 배경 이미지 받아오기 -> create page.
    GET: "/background-images/",
  },
  PROFILE_IMGS: {
    // 프로필 이미지 설정 -> message page.
    GET: "/profile-images/",
  },
  MESSAGES: {
    // id에 해당하는 메세지 객체 삭제 -> Card 컴포넌트
    DELETE: (path) => `/${TEAM}/messages/${path}/`,
  },
  RECIPIENTS: {
    // 새로운 대상객체 (To.~~) 생성 or 리스트에서 조회 시 사용
    GET: `/${TEAM}/recipients/`, // 메세지를 받는 사람(To ~~) 목록 -- CardList 컴포넌트 [OK]
    POST: `/${TEAM}/recipients/`, // 새 수신자를 생성 -> To 생성 -- 새 신규 데이터 사용해야 됨
  },
  RECIPIENTS_ID: {
    // 해당 아이디 객체에 대한 편지, 반응들 조회 or 삭제
    GET: (path) => `/${TEAM}/recipients/${path}/`, // post page 수신자 정보 받아오기 [OK]
    DELETE: (path) => `/${TEAM}/recipients/${path}/`, // 특정 수신자 자체를 삭제
  },
  RECIPIENTS_MESSAGES: {
    // 대상에게 남기는 메세지 데이터를 저장 - 메세지 작성 / 특정 대상 메세지 목록 조회
    GET: (path) => `/${TEAM}/recipients/${path}/messages/`, // post page Card들 정보 받아오기 [OK]
    POST: (path) => `/${TEAM}/recipients/${path}/messages/`,
  },
  RECIPIENTS_REACTIONS: {
    // 헤더에 쓰이는 이모지 데이터.
    GET: (path) => `/${TEAM}/recipients/${path}/reactions/`,
    POST: (path) => `/${TEAM}/recipients/${path}/reactions/`,
  },
};
