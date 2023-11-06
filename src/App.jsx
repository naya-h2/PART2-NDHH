import Option from "./components/Option.jsx";
import Badge from "./components/Badge.jsx";
import OptionProfile from "./components/OptionProfile.jsx";
import Toast from "./components/Toast.jsx";
import Modal from "./components/Modal.jsx";
import Test from "./components/Test.jsx";
import TestEditor from "./components/Suneditor.jsx";

const TEST = {
  profileImageURL:
    "https://mblogthumb-phinf.pstatic.net/MjAyMjA2MTFfODEg/MDAxNjU0OTU5NTI3Mzk5.Lwh7AvFzRUGYKPrR-4E2xr3swlQig3dKppXVIKg-p_8g.DTGMADYT8hE-kFxf5TV7jBhHDLabrPSXB8O3giAGwt4g.JPEG.tlsdkdus1230/IMG_1131.JPG?type=w800",
  sender: "윤정한",
  relationship: "가족",
  createdAt: "2023-11-01T08:05:25.399056Z",
  content:
    "나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 나은아 사랑해 ",
};

function App() {
  return (
    // ↓ 여기서 바로 컴포넌트 import해서 view 확인하세요
    <>
      <Badge>지인</Badge>
      <Badge>친구</Badge>
      <Badge>동료</Badge>
      <Badge>가족</Badge>
      <Badge num={24}>😍</Badge>
      <Badge num={10}>👍</Badge>
      <Badge num={16}>🎉</Badge>
      <Option color="Orange" />
      <Option src="https://i.namu.wiki/i/Wr_XJdI8GkMfxK7ovmm93kSWJZ24OO2O7NuG0sdIYsu9nz7uJITaHCJ5U_EMdI7tytcW75OCvzG8yRaYl4pkaw.webp" />
      <OptionProfile />
      <Toast />
      <Modal {...TEST} />
      <Test />
      <TestEditor />
    </>
    // ↑

    // ROUTER 경로 설정 미리 해두었어요.
    // Header나 버튼 겹치는 페이지는 Layout에서 공용컴포넌트 넣고
    // Outlet으로 페이지 내용만 바꿔주는 형식을 하고 싶어요.

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainLayout />}>
    //       <Route index element={<HomePage />} />
    //       <Route path="list" element={<ListPage />} />
    //     </Route>
    //     <Route path="/post" element={<MainLayout />}>
    //       <Route index element={<CreatePage />} />
    //       <Route path=":id/message" element={<MessagePage />} />
    //       <Route path=":id" element={<PostPage />}>
    //         <Route path="edit" element="<EditButton />" />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
