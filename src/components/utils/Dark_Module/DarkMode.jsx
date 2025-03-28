import React, { useState, useEffect } from "react";
import { ToggleButton } from "../../styledComponent/styled";


// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${(props) => (props.$darkMode ? "#121212" : "#f5f5f5")};
//     color: ${(props) => (props.$darkMode ? "#fff" : "#333")};
//     margin: 0;
//     padding: 0;
//     font-family: Arial, sans-serif;
//     transition: background-color 0.3s, color 0.3s ease;
//   }
//   a {
//     color: ${(props) => (props.$darkMode ? "#4da6ff" : "#007bff")};
//     text-decoration: none;
//   }

//   a:hover {
//     text-decoration: underline;
//   }
// `;


// const ToggleButton = styled.button`
//   background-color: ${(props) => (props.$darkMode ? "#333" : "#ddd")};
//   color: ${(props) => (props.$darkMode ? "#fff" : "#333")};
//   border: none;
//   padding: 8px 16px;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-left: 10px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${(props) => (props.$darkMode ? "#444" : "#ccc")};
//   }
// `;

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ToggleButton $darkMode={darkMode} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </ToggleButton>
  );
};

export default DarkMode;
