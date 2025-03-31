import styled from "styled-components";


export const ForgotPasswordBox = styled.div`
  width: 685px;
  height: 644px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  position: absolute;
  top: 128px;
  left: 577px;
`;

export const ForgotPasswordTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
  margin-top: 100px;
  text-align: center;
`;

export const ForgotPasswordInputWrapper = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px; 
`;

export const ForgotPasswordInput = styled.input`
  width: 60%; 
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #007bff;
  }
`;


export const ForgotPasswordButton = styled.button`
  width: 200px;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 400px;
  margin-left: 250px;
  
  &:hover {
    background-color: #0056b3;
  }
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #f4faff;
`;
