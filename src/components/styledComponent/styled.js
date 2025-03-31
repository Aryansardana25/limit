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

