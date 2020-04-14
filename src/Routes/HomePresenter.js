import React from "react";
import Header from "../Components/Common/Header";
import Main from "../Components/Common/Main";
import AdminError from "../Components/Common/AdminError";
import Footer from "../Components/Common/Footer";
import Notice from "../Components/Common/Notice";

function HomePresenter(props) {
  return props.state.isAdmin ? (
    <>
      <Header />
      <Main />
      <Footer />
      <Notice />
    </>
  ) : (
    <>
      <Header />
      <AdminError />
      <Footer />
    </>
  );
}
export default HomePresenter;
