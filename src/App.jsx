import React from "react";
import { useEffect, useState, createContext } from "react";
import Corelayout from "./components/layout/corelayout/corelayout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { GlobalStyle } from "./components/styles/globalStyle";
import New_route from "./router/new_route";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <GlobalStyle />
          <Corelayout>
            <New_route />
          </Corelayout>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

//private route
// <Routes>
//   <Route path="/" element={<PublicRoutes />}>
//     <Route path="/login" element={<Login />} />
//     <Route path="/" element={<Navigate to="/login" />} />
//   </Route>

//   <Route path="/" element={<ProtectedRoutes />}>
//     <Route path="/listhuman" element={<List_human />} />
//     <Route path="/create" element={<CreateHuman />} />
//     <Route path="/edit/:id" element={<Edit_human />} />
//     <Route path="/flag" element={<Flag_ />} />
//   </Route>
// </Routes>
