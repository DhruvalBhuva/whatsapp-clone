import React from "react";
import Layout, { Header } from "antd/lib/layout/layout";
import "../scss/style.scss";
import Login from "./Account/Login";


const Messenger = () => {
  return (
    <div className="layout-container">
      <Layout>
        <Header></Header>
      </Layout>
      <Login />
    </div>
  );
};

export default Messenger;
