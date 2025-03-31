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
  InputWrapper,
  Label,
  LinkWrapper,
  StyledLink,
  VerticalBar,
  StyledBox,
  PositionedImage,
  ImageText,
  BoxContainer,
  StyledImageBox,
} from "../components/styledComponent/otp.styled";
import sampleImage from "../assets/Group 410.png";
import sampleImage1 from "../assets/Frame 329.png";
import sampleImage2 from "../assets/Frame 330.png";
import sampleImage3 from "../assets/Frame 331.png";
import sampleImage4 from "../assets/Frame 332.png";

const OtpVerification = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
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

    if (!formData.otp) {
      tempErrors.otp = "OTP is required";
    } else if (formData.otp.length !== 4 || !/^\d{4}$/.test(formData.otp)) {
      tempErrors.otp = "OTP must be a 4-digit number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("OTP Data:", formData);
      alert("OTP Verified Successfully!");
    }
  };

  return (
    <Container>
      <Card>
        <LeftSection>
          <StyledBox>
            <PositionedImage src={sampleImage} alt="Styled Box Image" />
            <ImageText>Secure Your Account with OTP Verification</ImageText>
            <BoxContainer>
              <StyledImageBox src={sampleImage1} alt="Image 1" />
              <StyledImageBox src={sampleImage2} alt="Image 2" />
              <StyledImageBox src={sampleImage3} alt="Image 3" />
              <StyledImageBox src={sampleImage4} alt="Image 4" />
            </BoxContainer>
          </StyledBox>
        </LeftSection>

        <RightSection>
          <Title>OTP Verification</Title>
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
              <Label>Enter OTP</Label>
              <Input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter 4-digit OTP"
                maxLength="4"
              />
              {errors.otp && <p style={{ color: "red" }}>{errors.otp}</p>}
            </InputWrapper>

            <Button type="submit">Verify OTP</Button>

            <LinkWrapper>
              <StyledLink href="/resend-otp">Resend OTP</StyledLink>
              <VerticalBar>|</VerticalBar>
              <StyledLink href="/login">Back to Login</StyledLink>
            </LinkWrapper>
          </Form>
        </RightSection>
      </Card>
    </Container>
  );
};

export default OtpVerification;
