import styled from "styled-components";

export const ToggleButton = styled.button`
  background-color: ${(props) => (props.$darkMode ? "#333" : "#ddd")};
  color: ${(props) => (props.$darkMode ? "#fff" : "#333")};
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$darkMode ? "#444" : "#ccc")};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
   background-color: #f4faff; 
`;
export const Card = styled.div`
  width: 1022px;
  height: 650px;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex; 
  flex-direction: row; 
  overflow: hidden; 
  `;
export const LeftSection = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden; 
background-color: transparent;
`;


export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 0; 
`;

export const RightSection = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: red;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;