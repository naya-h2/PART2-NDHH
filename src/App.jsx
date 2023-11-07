import PostLayout from './pages/PostLayout';
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    // ↓ 여기서 바로 컴포넌트 import해서 view 확인하세요
    <>
      <PostLayout />
//       <Dropdown />
//       <Dropdown disabled />
//       <ToggleButton />
//       {/* primary, secondary, outlined */}
//       {/* children prop 꼭 필요 */}
//       {/* size prop으로는 sizeNN 넘겨주면 됩니다 */}
//       <Button type="primary" size="primarySize56">
//         primary
//       </Button>
//       <Button type="secondary" size="size40">
//         secondary
//       </Button>
//       <Button type="outlined" size="outlinedSize56">
//         outlined
//       </Button>
//       {/* outlined type에 icon 넘겨주면 얼굴모양 버튼 생겨요! */}
//       <Button type="outlined" size="size40" icon>
//         outlined
//       </Button>
//       {/* plus, trash 버튼은 아래 코드 그대로 쓰시면 됩니다 */}
//       <Button type="plus" size="plusSize" />
//       <Button type="trash" size="trashSize" />
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
