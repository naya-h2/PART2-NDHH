const KEY = "c893120693cd3c7efdd63b83220acc55";

const shareKakaoTalk = (url, name, image) => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(KEY);
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `롤링 페이퍼 | ${name}`,
        description: `지금 바로 ${name}님에게 편지를 보내보세요🤍`,
        imageUrl: image,
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
