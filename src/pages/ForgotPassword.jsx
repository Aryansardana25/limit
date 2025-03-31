import React, { useState } from "react";
import {
  Container,
  ForgotPasswordBox,
  ForgotPasswordTitle,
  ForgotPasswordInputWrapper,
  ForgotPasswordInput,
  ForgotPasswordButton,
} from "../components/styledComponent/styled";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    alert("Password reset link has been sent to your email!");
  };

  return (
    <Container>

      <ForgotPasswordBox>
        <ForgotPasswordTitle>Forgot Password</ForgotPasswordTitle>
        <form onSubmit={handleSubmit}>
          <ForgotPasswordInputWrapper>
            <ForgotPasswordInput
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={handleChange}
            />
          </ForgotPasswordInputWrapper>
          <ForgotPasswordButton type="submit">Send Reset Link</ForgotPasswordButton>
        </form>
      </ForgotPasswordBox>
    </Container>
  );
};

export default ForgotPassword;
