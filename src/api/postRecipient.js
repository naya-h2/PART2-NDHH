const { TEAM } = require("./config");

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

// const hi = {
//   team: TEAM,
//   name: recipient,
//   backgroundColor: backgroundColor,
//   backgroundImageURL: backgroundImageURL,
// }

// Object.keys(hi);
// [team, name, backgroundColor, backgroundImageURL]

// 다은님은 속성이랑 값을 구분해야한다.
// 속성 === 'key' 값은 'value'

// 이터러블, 이터레이터 패턴을 알아야 이해가 됨.
// Object.keys() => {} 객체의 속성을 [] 배열에 넣어서 반환한다.

// export const CreateRecipient = (object) => {
//   const post = new FormData().append("team", TEAM);

//   for (const v of Object.keys(object)) {
//     post.append(v, object[v])
//   }
//   return post
// }

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
