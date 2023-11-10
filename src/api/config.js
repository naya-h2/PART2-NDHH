export const BASE_URL = "https://rolling-api.vercel.app";
export const TEAM = "1-7";
const id = 1; // 일단 고정//

export const ENDPOINTS = {
  BACKGROUND_IMGS: {
    GET: "/background-images/",
  },
  PROFILE_IMGS: {
    GET: "/profile-images/",
  },
  MESSAGES: {
    DELETE: `/${TEAM}/messages/${id}/messages_delete/`,
  },
  RECIPIENTS: {
    GET: `/${TEAM}/recipients/`,
    POST: `/${TEAM}/recipients/`,
  },
  RECIPIENTS_ID: {
    GET: (id) => `/${TEAM}/recipients/${id}/`,
    DELETE: (id) => `/${TEAM}/recipients/${id}/`,
  },
};
