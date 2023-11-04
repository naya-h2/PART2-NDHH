import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/Homepage";
import MainLayout from "./pages/MainLayout";
import CreateLayout from "./pages/CreateLayout";
import PostPage from "./pages/PostPage";
import MessagePage from "./pages/MessagePage";
import PostLayout from "./pages/PostLayout";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    // ↓ 여기서 바로 컴포넌트 import해서 view 확인하세요
    <>반가워요. 저는 Vite예요.</>
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
