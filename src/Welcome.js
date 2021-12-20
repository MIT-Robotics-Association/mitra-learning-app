import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "./assets/background_image.png";
import Logo from "./assets/logo.png";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        align: "center",
        backgroundImage: `linear-gradient(rgba(127,0,0,0.75),rgba(0,0,127,0.75)), url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#F7F7F7" }}>
          <Box
            component="img"
            sx={{
              height: 64,
              mx: 2,
            }}
            alt="MITRA Logo"
            src={Logo}
          />
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            MITRA Learning App
          </Typography>
          {/* <Box component="img" src={Logo} /> */}
        </Toolbar>
      </AppBar>
      <Typography sx={{ m: 2, color: "white" }} align="center" variant="h5">
        Hone you technical skills and ace in your career!
      </Typography>
      <Button
        color="primary"
        sx={{ m: 2 }}
        variant="contained"
        onClick={() => {
          navigate("/courses");
        }}
      >
        Start Learning Now!
      </Button>
    </Box>
  );
};

export default Welcome;
