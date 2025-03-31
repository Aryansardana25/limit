import styled from "styled-components";

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
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f4faff;
`;


export const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e0f7fa;
  border-radius: 32px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

export const PositionedImage = styled.img`
  width: 278px;
  height: 238.82px;
  position: absolute;
  top: 202px;
  left: 550px;
  border-radius: 20px;
`;

export const RightSection = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f4faff;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #333;
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

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
`;

export const StyledLink = styled.a`
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const VerticalBar = styled.span`
  color: #007bff;
  font-size: 14px;
`;

export const ImageText = styled.p`
  position: absolute;
  top: calc(202px + 238.82px + 10px);
  left: 550px;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  color: #333;
  text-align: center;
  width: 278px;
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 185px);
  grid-template-rows: repeat(2, 81px);
  gap: 20px;
  position: absolute;
  top: calc(240px + 238.82px + 40px);
  left: 490px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledImageBox = styled.img`
  width: 185px;
  height: 81px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d1f3f8;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;
