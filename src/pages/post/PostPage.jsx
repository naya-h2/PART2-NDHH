import Header from "@/components/Header.jsx";
import Layout from "./Layout";

function PostPage() {
  return (
    <>
      <Header />
      <Header serviceType={true} />
      <Layout path="" />
    </>
  );
}

export default PostPage;
