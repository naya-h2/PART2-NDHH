import Header from "../../components/Header";
import Layout from "./Layout";
import { Helmet } from "react-helmet-async";

function CreatePage() {
  return (
    <>
      <Helmet>
        <title>Post | Rolling</title>
      </Helmet>
      <Header hideButton />
      <Layout />
    </>
  );
}

export default CreatePage;
