import Fab from "@mui/material/Fab";
import SnackBar from "@mui/material/Snackbar";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

const Share = () => {
  const [open, setOpen] = useState(false);
  const share = (event) => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: "MITRA Learning App",
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <>
      <SnackBar
        // only on mobile bottom nav = 56 + gap = 15 + fab = 48 + gap = 15 = 119
        sx={{ position: "absolute", bottom: 134 }}
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
        message="URL copied to clipboard"
      />
      <Fab
        color="primary"
        size="medium"
        aria-label="share"
        onClick={share}
        // bottom nav height is 56 so above 15 units the share fab will in the ui
        sx={{ position: "fixed", bottom: 71, right: 15, zIndex: 10000 }}
      >
        <ShareIcon />
      </Fab>
    </>
  );
};

export default Share;