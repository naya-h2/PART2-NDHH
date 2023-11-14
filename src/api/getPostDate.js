import useGetData from "@/hooks/useGetData";
import { TEAM } from "./config";

export const CreateRecipient = ({ name, backgroundColor, URL }) => {
  return {
    team: TEAM,
    name: name,
    backgroundColor: backgroundColor,
    backgroundImageURL: URL,
  };
};

export const CreateMessage = ({ recipientId, sender, URL, relationship, content, font }) => {
  return {
    team: TEAM,
    recipientId: recipientId,
    sender: sender,
    profileImageURL: URL,
    relationship: relationship,
    content: content,
    font: font,
  };
}

export const CreateEmoji = (emoji, type) => {
  return {
    postData: {
      emoji: emoji,
      type: type,
    },
  };
};
