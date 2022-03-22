import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Messenger from "./Components/Messenger";
import AccountProvider from "./context/AccountProvider";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState();

  return (
    <AccountProvider>
      <Messenger />
    </AccountProvider>
  );
}

export default App;
