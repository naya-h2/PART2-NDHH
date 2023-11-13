import useGetData from "@/hooks/useGetData";
import { TEAM } from "./config";

export const CreateRecipient = (recipient, backgroundColor, backgroundImageURL) => {
  return {
    postData: {
      team: TEAM,
      name: recipient,
      backgroundColor: backgroundColor,
      backgroundImageURL: backgroundImageURL,
    },
  };
};

export const CreateMessage = (recipientId, sender, profileImageURL, relationship, content, font) => {
  return {
    postData: {
      team: TEAM,
      recipientId: recipientId,
      sender: sender,
      profileImageURL: profileImageURL,
      relationship: relationship,
      content: content,
      font: font,
    },
  };
};

export const CreateEmoji = (emoji, type) => {
  return {
    postData: {
      emoji: emoji,
      type: type,
    },
  };
};
