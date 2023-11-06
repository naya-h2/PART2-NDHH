export const Recipients = {
  id: 2,
  name: "김나은",
  backgroundColor: "green",
  backgroundImageURL: null,
  createdAt: "2023-10-26T13:19:31.401765Z",
  messageCount: 6,
  recentMessages: [
    {
      id: 32,
      recipientId: 2,
      sender: "김하늘",
      profileImageURL:
        "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
      relationship: "가족",
      content: "열심히 일하는 모습 멋있습니다.",
      font: "Pretendard",
      createdAt: "2023-11-01T08:05:25.399056Z",
    },
    {
      id: 31,
      recipientId: 2,
      sender: "안희원",
      profileImageURL:
        "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
      relationship: "지인",
      content: "항상 응원합니다",
      font: "Noto Sans",
      createdAt: "2023-11-01T08:04:12.852691Z",
    },
    {
      id: 31,
      recipientId: 2,
      sender: "김다은",
      profileImageURL:
        "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
      relationship: "지인",
      content: "항상 응원합니다",
      font: "Noto Sans",
      createdAt: "2023-11-01T08:04:12.852691Z",
    },
  ],
  reactionCount: 48,
  topReactions: [
    {
      id: 34,
      emoji: "🥰",
      count: 18,
    },
    {
      id: 28,
      emoji: "😄",
      count: 17,
    },
    {
      id: 34,
      emoji: "😊",
      count: 8,
    },
  ],
};

export const Reactions = {
  count: 5,
  next: null,
  previous: "https://rolling-api.vercel.app/0-3/recipients/2/reactions/?limit=2&offset=1",
  results: [
    {
      id: 34,
      emoji: "🥰",
      count: 18,
    },
    {
      id: 28,
      emoji: "😄",
      count: 17,
    },
    {
      id: 34,
      emoji: "😊",
      count: 8,
    },
    {
      id: 28,
      emoji: "🥹",
      count: 6,
    },
    {
      id: 34,
      emoji: "🫥",
      count: 2,
    },
  ],
};
