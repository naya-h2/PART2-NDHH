import { useState, useCallback, useEffect } from "react";
import actionResponse from "@/utils/api";
import PropTypes from "prop-types";

const checkType = (type, result) => {
  switch (type) {
    case "BACKGROUND_IMGS":
      const { imageUrls: background_imgs } = result;
      break;
    case "PROFILE_IMGS":
      const { imageUrls: profile_imgs } = result;
      break;
    // case ("MESSAGES") 딜리트만 있음
    // case ("RECIPIENTS") :
    //   const { count, next, previous, results } = result;

    // case ("RECIPIENTS_ID") :
    //   const { id, name, backgroundColor, backgroundImageURL, createdAt, messageCount, recentMessages :{id: sentId, recipientId, sender, profileImageURL, relationship, content, font, createdAt:createdDate}} = result;

    // case ("RECIPIENTS_MESSAGES") :
    //   const {count, next, previous, results: {id: sentId, recipientId, sender, profileImageURL, relationship, content, font, createdAt:createdDate}} = result;

    // case ("RECIPIENTS_REACTIONS") :
  }
  return result;
};

const useSomethingData = (type, method = "GET", postData) => {
  const [data, setData] = useState(null);

  const doSomethingData = useCallback(async () => {
    try {
      const result = await actionResponse(type, method, postData);
      const result2 = checkType(type, result);
      setData(result2);
    } catch (error) {
      setData(null);
      console.error(error);
    }
  }, [type]);

  useEffect(() => {
    doSomethingData();
  }, [doSomethingData]);

  return data;
};

useSomethingData.propTypes = {
  type: PropTypes.string.isRequired,
  method: PropTypes.oneOf([null, "GET", "POST", "DELETE"]),
  postData: PropTypes.object,
};

export default useSomethingData;
