import React from "react";
import {
  Button,
  Card,
  Container,
  Input,
  LeftSection,
  RightSection,
  Title,
  Form,
  StyledImage,
} from "../components/styledComponent/styled";

const Login = () => {
  return (
    <Container>
      <Card>
        <LeftSection>
          <StyledImage src="/assets/outer.png" alt="Outer Image" />
        </LeftSection>
        <RightSection>
          <Title>Login</Title>
          <Form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit">Log In</Button>
          </Form>
        </RightSection>
      </Card>
    </Container>
  );
};

export default Login;
