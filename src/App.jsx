import CreatePage from "@/pages/create/CreatePage";
import HomePage from "@/pages/home/HomePage";
import ListPage from "@/pages/list/ListPage";
import MessagePage from "@/pages/message/MessagePage";
import PostPage from "@/pages/post/PostPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post">
          <Route index element={<CreatePage />} />
          <Route path=":id" element={<PostPage />} />
          <Route path=":id/edit" element={<PostPage page="edit" />} />
          <Route path=":id/message" element={<MessagePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
