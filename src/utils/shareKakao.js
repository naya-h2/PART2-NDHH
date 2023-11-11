const KEY = "c893120693cd3c7efdd63b83220acc55";

const shareKakaoTalk = (url) => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(KEY);
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "롤링",
        description: `00에게 편지를 보내보세요🤍`,
        imageUrl: "https://dnvefa72aowie.cloudfront.net/origin/profile/202203/725FA37FF3F08BEEF21E6FF01DC8271269E1E889211623AD8852E04704A3F255.jpg?q=82&s=640x640&t=crop",
        link: {
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            webUrl: url,
          },
        },
      ],
    });
  }
};

export default shareKakaoTalk;
