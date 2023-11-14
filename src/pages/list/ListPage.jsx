import Header from "@/components/Header";
import Layout from "@/pages/list/Layout";
import GlobalStyles from "@/styles/GlobalStyles";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

function ListPage() {
  return (
    <>
      <Helmet>
        <title>List | Rolling</title>
      </Helmet>
      <CustomGlobalStyle />
      <Header />
      <Layout />
    </>
  );
}

export default ListPage;

const CustomGlobalStyle = styled(GlobalStyles)`
  body {
    overflow-y: hidden !important;
  }
`;
