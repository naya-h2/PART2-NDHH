import useMethodData from "./useMethodData";

export const useGetBackgroundImg = () => {
  const data = useMethodData("BACKGROUND_IMGS", "GET");
  const { imageUrls: background_imgs } = result;
  return background_imgs;
};

export const useGetProfileImg = () => {
  const data = useMethodData("PROFILE_IMGS", "GET");
  const { imageUrls } = data;

  return { imageUrls };
};

export const useGetPostCardData = () => {
  const { data, loading, error } = useMethodData("RECIPIENTS_ID", "GET", 2);

  if (loading) {
    return { loading: true };
  }

  if (error) {
    return { error: true };
  }

  return { data: data || {} };
};
