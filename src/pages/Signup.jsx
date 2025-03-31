import React, { useState } from "react";
import {
  Container,
  Card,
  LeftSection,
  RightSection,
  Title,
  Form,
  Input,
  Button,
  FullWidthImage,
  InputWrapper,
  Label,
  NewPositionedImageSignup, 
} from "../components/styledComponent/signup.styles";
import signupImage from "../assets/Frame 339.png";
import newSignupImage from "../assets/Frame 328 (1).png"; 

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    let tempErrors = {};
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      alert("Signup Successful");
    }
  };

  return (
    <Container>
      <Card>
        <LeftSection>
          <FullWidthImage src={signupImage} alt="Signup Section" />
          <NewPositionedImageSignup
            src={newSignupImage}
            alt="Additional Signup Image"
          />
        </LeftSection>
        <RightSection>
          <Title>Sign Up</Title>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label>Email Address</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </InputWrapper>
            <InputWrapper>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </InputWrapper>
            <Button type="submit">Sign Up</Button>
          </Form>
        </RightSection>
      </Card>
    </Container>
  );
};

export default Signup;
