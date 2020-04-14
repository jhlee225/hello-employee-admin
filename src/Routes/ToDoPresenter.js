import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Notice from "../Components/Common/Notice";
import AdminError from "../Components/Common/AdminError";
import EmployeeSelect from "../Components/ToDo/EmSelectContainer";
function ToDoPresenter(props) {
  return props.state.isAdmin ? (
    <>
      <Header />
      <EmployeeSelect />
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
