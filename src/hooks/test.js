actionResponse("BACKGROUND_IMGS", "GET")
  .then((data) => {
    console.log(data);

    if (data.imageUrls && data.imageUrls.length > 0) {
      const imageUrl = data.imageUrls[0];
      setTestImg(imageUrl);
    }
  })
  .catch((error) => {
    console.error("API 요청 중 에러 발생:", error);
  });
