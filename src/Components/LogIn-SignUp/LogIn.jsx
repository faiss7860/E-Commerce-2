import '../LogIn-SignUp/LogIn-SignUp.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { LOCAL_STORAGE_LOGGED_USRS_KEY } from "../../Utils/UsersList";
import { LOCAL_STORAGE_USRS_KEY } from "../../Utils/UsersList";
import { passwordValidation } from "../../Utils/PasswordValidation";
import { inputValueUpdate } from "../../Utils/InputValueUpdate";

const LogIn = (props) => {
  
  const { setUser } = props;
  const [userName, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const [validationError, SetValidationError] = useState(null);
  const navigation = useNavigate();

  function loginbutton() {
    const validationResult = passwordValidation(password);
    if (validationResult.result === false) {
      SetValidationError(validationResult.massage);
      return;
    }
    const usersList =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_USRS_KEY)) || [];
    const result = usersList.find(
      (user) => user.userName === userName && user.password === password
    );
    
    // console.log (result);

    if (result) {
      setUser(result);
      localStorage.setItem(
        LOCAL_STORAGE_LOGGED_USRS_KEY,
        JSON.stringify(result)
      );
      navigation("/");
    } else {
      SetValidationError("user not found");
    }
  }

  return (
    <div className='logsignBox'>
      <form className="form">
        <span className="signup">Log In</span>
        <p>{validationError}</p>
        <input type="userName" placeholder="User Name" className="form--input" onChange={(event) => {
                inputValueUpdate(event, updateUserName);
              }} value={userName}/>
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={(event) => {
            inputValueUpdate(event, updatePassword, passwordValidation);
          }}
          value={password}
        />
        <button className="form--submit" onClick={loginbutton}>Log In</button>
      </form>
    </div>
  );
}

export default LogIn;