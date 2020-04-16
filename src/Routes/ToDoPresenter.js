import React from "react";
import Header from "../Components/ToDo/TodoHeader";
import Main from "../Components/ToDo/TodoMain";
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
