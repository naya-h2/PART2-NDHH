import useMethodData from "./useMethodData";

export const useGetblabla = (result) => {
  const { imageUrls: background_imgs } = result;
  return background_imgs;
};

export const useGetblabla2 = (result) => {
  const { imageUrls } = result;

  return { imageUrls };
};

export const useGetblabla3 = (result) => {
  const {
    data: { backgroundColor, backgroundImageURL, messageCount },
  } = result;
  // 이런 식으로 안에 뭐 있는지 보여주기...?
  return { ...data };
};
