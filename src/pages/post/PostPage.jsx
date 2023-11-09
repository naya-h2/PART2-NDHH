import Header from "@/components/Header.jsx";
import Layout from "./Layout";
import useGetWindowWidth from "@/hooks/useGetWindowWidth";
import { DeviceSizeNum } from "@/styles/DeviceSize";

function PostPage() {
  const windowWidth = useGetWindowWidth();
  console.log(windowWidth);
  return (
    <>
      {windowWidth > DeviceSizeNum.mobile && <Header />}
      <Header serviceType={true} />
      <Layout path="edit" />
    </>
  );
}

export default PostPage;
