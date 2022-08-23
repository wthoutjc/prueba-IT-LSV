import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

// Components
import { Register, NavBar, Author, Notification } from "./components";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [notification, setNotification] = useState({
    open: false,
    severity: "",
    title: "",
    message: "",
  });

  return (
    <Box className="register__app">
      <NavBar />
      <Notification {...notification} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: isMobile ? 1 : 4,
        }}
      >
        <Author />
        <Register setNotification={setNotification} />
      </Box>
    </Box>
  );
}

export default App;
