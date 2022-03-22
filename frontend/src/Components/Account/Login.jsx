import React, { useContext } from "react";
import { Col, List, Modal, Row, Typography } from "antd";
import { GoogleLogin } from "react-google-login";
import "../../scss/style.scss";
import QrCode from "../../Images/qrcode.jpg";
import Title from "antd/lib/typography/Title";
import { AccountContext } from "../../context/AccountProvider";

const Login = () => {
  const { account, setAccount } = useContext(AccountContext);
  const listData = [
    "1. Open whatsapp on your phone",
    "2. Tape manu on setting and select link devices",
    "3. point your phone to screen to capture screen",
  ];

  const clientId =
    "521824706296-62kaunvhhr0ro06kaobjq44ss49mjrm0.apps.googleusercontent.com";

  const successHandler = (response) => {
    console.log(response);
    setAccount(response.profileObj);
  };
  const failureHandler = (response) => {
    console.log(response);
  };

  return (
    <div className="login-container">
      <Row className="p-5">
        <Col sm={24} md={16}>
          <Title level={3}>To use whatsapp on your computer:</Title>
          <List
            dataSource={listData}
            renderItem={(item) => (
              <List.Item>
               {item}
              </List.Item>
            )}
          />
        </Col>

        <Col sm={24} md={8}>
          <div className="m-auto position-relative">
            <img src={QrCode} width={250} height={250} alt="QrCode" />
            <div
              className="position-absolute"
              style={{ left: "50%", bottom: "50%" }}
            >
              <GoogleLogin
                clientId={clientId}
                buttonText=""
                isSignedIn={true}
                onSuccess={successHandler}
                onFailure={failureHandler}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
