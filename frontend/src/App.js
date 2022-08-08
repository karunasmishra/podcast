import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import EventHandling from "./components/EventHandling";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import ManageUser from "./components/ManageUser";
import NotFound from "./components/NotFound";
import Register from "./components/Register";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const mytheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#133c68",
      },
    },
  });

  const mytheme2 = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#133c68",
      },
    },
  });

  const mytheme3 = createTheme({
    palette: {
      primary: {
        main: "#133c68",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme ? mytheme2 : mytheme}>
        <BrowserRouter>
          <Header
            username={"Abhinav"}
            avatar={
              "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
            }
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          >
            My Content
          </Header>
          <Routes>
            <Route element={<Home />} path="homepage" />
            <Route element={<Login />} path="signin" />
            <Route element={<EventHandling />} path="event" />
            <Route element={<Gallery />} path="gallery" />
            <Route element={<NotFound />} path="404" />
            <Route element={<Register />} path="register" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route element={<Chat />} path="chat" />

            <Route element={<Navigate to="/404" />} path="*" />
          </Routes>
        </BrowserRouter>


      </ThemeProvider>
    </div>
  );
}

export default App;