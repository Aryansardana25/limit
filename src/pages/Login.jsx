import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Input,
  LeftSection,
  RightSection,
  Title,
  Form,
  StyledBox,
  PositionedImage,
  ImageText,
  BoxContainer,
  StyledImageBox,
  InputWrapper,
  Label,
  LinkWrapper, 
  StyledLink, 
  VerticalBar, 
} from "../components/styledComponent/styled";
import sampleImage from "../assets/Group 410.png";
import sampleImage1 from "../assets/Frame 329.png";
import sampleImage2 from "../assets/Frame 330.png";
import sampleImage3 from "../assets/Frame 331.png";
import sampleImage4 from "../assets/Frame 332.png";

const Login = () => {
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
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data:", formData);
      alert("Login Successful");
    }
  };

  return (
    <Container>
      <Card>
        <LeftSection>
          <StyledBox>
            <PositionedImage src={sampleImage} alt="Styled Box Image" />
            <ImageText>Explore the Crypto World with Bluechain</ImageText>
            <BoxContainer>
              <StyledImageBox src={sampleImage1} alt="Image 1" />
              <StyledImageBox src={sampleImage2} alt="Image 2" />
              <StyledImageBox src={sampleImage3} alt="Image 3" />
              <StyledImageBox src={sampleImage4} alt="Image 4" />
            </BoxContainer>
          </StyledBox>
        </LeftSection>
        <RightSection>
          <Title>Login</Title>
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
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </InputWrapper>
            <Button type="submit">Log In</Button>

            <LinkWrapper>
              <StyledLink href="/register">Register Now</StyledLink>
              <VerticalBar>|</VerticalBar>
              <StyledLink href="/forgot-password">Forgot Password</StyledLink>
            </LinkWrapper>
          </Form>
        </RightSection>
      </Card>
    </Container>
  );
};


export default Login;
