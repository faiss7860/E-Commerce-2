import '../LogIn-SignUp/LogIn-SignUp.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { inputValueUpdate } from "../../Utils/InputValueUpdate";
import { LOCAL_STORAGE_USRS_KEY } from "../../Utils/UsersList";

const SignUp = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();

  const navigation = useNavigate();
  return (
    <div className="logsignBox">
      <form className="form">
        <span className="signup">Sign Up</span>

        <input
          type="UserName"
          value={userName}
          onChange={(event) => {
            inputValueUpdate(event, setUserName);
          }}
          placeholder="User Name"
          className="form--input"
        />

        <input
          type="email"
          value={email}
          onChange={(event) => {
            inputValueUpdate(event, setEmail);
          }}
          placeholder="Email Address"
          className="form--input"
        />

        <input
          type="phone"
          value={phone}
          onChange={(event) => {
            inputValueUpdate(event, setPhone);
          }}
          placeholder="Mobile No."
          className="form--input"
        />

        <input
          value={password}
          onChange={(event) => {
            inputValueUpdate(event, setPassword);
          }}
          placeholder="Password"
          className="form--input"
        />

        <button
          className="form--submit"
          onClick={() => {
            let usersList = JSON.parse(
              localStorage.getItem(LOCAL_STORAGE_USRS_KEY)
            );
            usersList = usersList === null ? [] : usersList;
            localStorage.setItem(
              LOCAL_STORAGE_USRS_KEY,
              JSON.stringify([
                ...usersList,
                {
                  userName,
                  email,
                  phone,
                  password,
                },
              ])
            );
            navigation("/login");
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp