import React from "react";
import Header from "../Components/Log/LogHeader";
import Main from "../Components/Log/LogMain";
import Footer from "../Components/Common/Footer";
import Notice from "../Components/Common/Notice";
import AdminError from "../Components/Common/AdminError";
function ToDoPresenter(props) {
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

export default ToDoPresenter;
