import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/post/PostPage";
import HomePage from "./pages/home/HomePage";
import MessagePage from "./pages/message/MessagePage";
import ListPage from "./pages/list/ListPage";

function App() {
  return (
    <>
      {/* <CreatePage /> */}
      {/* <PostLayout /> */}
      {/* <HomePage /> */}
      {/* <MessagePage /> */}
      <ListPage />
    </>
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
