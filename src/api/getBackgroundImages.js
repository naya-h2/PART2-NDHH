import actionResponse from "./api";

const getBackgroundImages = async (type, method) => {
  const data = await actionResponse(type, method);

  return data;
};

export default getBackgroundImages;
