import { useState, useCallback, useEffect } from "react";
import actionResponse from "@/api/api";
import PropTypes from "prop-types";

const checkType = (type, result) => {
  switch (type) {
    case "BACKGROUND_IMGS":
      const { imageUrls: background_imgs } = result;
      console.log(background_imgs);
      return background_imgs;

    case "PROFILE_IMGS":
      const { imageUrls: profile_imgs } = result;
      return profile_imgs;
    // case ("MESSAGES") 딜리트만 있음

    case "RECIPIENTS":
      const {
        data: { count, next, previous, results },
      } = result;

    case "RECIPIENTS_ID":
      const {
        data: { id, name, backgroundColor, backgroundImageURL, createdAt, messageCount, recentMessages },
      } = result;

    // case ("RECIPIENTS_MESSAGES") :
    //   const {count, next, previous, results: {id: sentId, recipientId, sender, profileImageURL, relationship, content, font, createdAt:createdDate}} = result;

    // case ("RECIPIENTS_REACTIONS") :
  }
};

const useMethodData = (type, method = "GET", path, postData) => {
  const [data, setData] = useState(null);

  const throwData = useCallback(async () => {
    try {
      const result1 = await actionResponse(type, method, path, postData);
      const result2 = checkType(type, result1);
      setData(result2);
    } catch (error) {
      setData(null);
      console.error(error);
    }
  }, [type]);

  useEffect(() => {
    throwData();
  }, [throwData]);

  return data;
};

useMethodData.propTypes = {
  type: PropTypes.string.isRequired,
  method: PropTypes.oneOf([null, "GET", "POST", "DELETE"]),
  postData: PropTypes.object,
};

export default useMethodData;
