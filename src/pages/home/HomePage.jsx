import Header from "@/components/Header";
import Layout from "@/pages/home/Layout";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Rolling</title>
      </Helmet>
      <Header />
      <Layout />
    </>
  );
}

export default HomePage;
