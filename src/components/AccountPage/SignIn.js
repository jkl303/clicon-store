import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRightIcon } from "../../icons/ArrowRight.svg";
import { ReactComponent as EyeIcon } from "../../icons/Eye.svg";

import {
  AuthLabelStyled,
  LogInBtnStyled,
} from "../../styles/authUI.styled";

const SignIn = () => {
  const { logIn } = useAuth();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    logIn(
      form.elements.email.value,
      form.elements.password.value,
    );
  };

  const changePasswordVisibilty = () => {
    passwordRef.current.type === "password"
      ? (passwordRef.current.type = "text")
      : (passwordRef.current.type = "password");
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthLabelStyled htmlFor="email">
        Email Address
        <input
          id="email"
          name="email"
          type="email"
          required
        />
      </AuthLabelStyled>

      <AuthLabelStyled htmlFor="password">
        Password
        <Link to="/user-account/forget-password">
          Forget Password
        </Link>
        <input
          id="password"
          name="password"
          type="password"
          ref={passwordRef}
          required
        />
        <button
          type="button"
          onClick={changePasswordVisibilty}>
          <EyeIcon />
        </button>
      </AuthLabelStyled>

      <LogInBtnStyled type="submit">
        SIGN IN
        <ArrowRightIcon />
      </LogInBtnStyled>
    </form>
  );
};

export default SignIn;
