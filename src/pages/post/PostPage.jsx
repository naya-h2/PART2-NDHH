import Header from "@/components/Header.jsx";
import useGetWindowWidth from "@/hooks/useGetWindowWidth";
import { DeviceSizeNum } from "@/styles/DeviceSize";
import Layout from "./Layout";
import useGetData from "@/hooks/useGetData";
import { useParams } from "react-router";


function PostPage({ page }) {
  const windowWidth = useGetWindowWidth();
  const { id } = useParams();

  const userData = useGetData("RECIPIENTS_ID", "GET", id);

  return (
    <>
      {windowWidth > DeviceSizeNum.mobile && <Header />}
      <Header userData={userData} serviceType />
      <Layout path={page} />
    </>
  );
}

export default PostPage;
