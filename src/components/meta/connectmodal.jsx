import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Desktop from "./desktop";
import metamask from "./assets/images/icons/metamask-fox.svg";
import closeimg from "./assets/images/icons/close.svg";
import { UserContext } from ".";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250, // Adjust width for a more compact view
  bgcolor: "white", // Change to a clean white background
  borderRadius: "12px", // Add rounded corners
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a soft shadow for the modal
  padding: "20px", // Increased padding
  display: "flex",
  flexDirection: "column", // Stack contents vertically
  alignItems: "center",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: 13, // Larger title
  fontWeight: "600", // Bold title
  color: "#333", // Darker text for the title
  margin: 0,
};

const buttonStyle = {
  backgroundColor: "rgb(28, 172, 29)", // Metamask brand color
  color: "#fff", // White text
  padding: "10px 20px", // Larger padding for a better button feel
  borderRadius: "8px", // Rounded corners for the button
  border: "none",
  fontWeight: "600", // Bold text
  cursor: "pointer",
  transition: "background-color 0.3s ease", // Smooth hover effect
};

const buttonHoverStyle = {
  backgroundColor: "#e5721a", // Darken the button on hover
};

const modalBackgroundStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.4)", // Transparent dark background to highlight modal
  backdropFilter: "blur(10px)", // Soft blur effect for background
};

const Connectmodal = () => {

  const [walletstatus, setWalletstatus] = useState(false);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setWalletstatus(true);
    } else {
      setWalletstatus(false);
    }
  }, []);
  const data = useContext(UserContext);
  const mainmodal = data.mainmodal;
  const handleMainmodal = () => data.setMainmodal(!mainmodal);
  // handle connectmetamask
  const [openconnectmetamask, setOpenconnectmetamask] = useState(false);
  const handleconnectmetamaskOpen = () => {
    setOpenconnectmetamask(true);
  };
  const handleconnectmetamaskClose = () => {
    setOpenconnectmetamask(false);
  };
  // handleconnectmodal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const connectmetamask = () => {
    if (walletstatus === true) {
      // const openMainmodal = () => {
      handleMainmodal();
      handleClose();
      // };
    } else {
      handleconnectmetamaskOpen();
      handleClose();
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{ ...buttonStyle, position: "absolute", top: 13, right: 10 }}
      >
        Connect Wallet
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        sx={modalBackgroundStyle} // Apply background blur effect
      >
        <Box sx={style}>
          <div style={headerStyle}>
            <h5 id="child-modal-title" style={titleStyle}>
              Connect Metamask
            </h5>
            <Button
              onClick={handleClose}
              style={{
                background: "transparent",
                border: "none",
                justifyContent: "end",
                paddingTop: 0,
              }}
            >
              <img src={closeimg} style={{ width: 13 }} />
            </Button>
          </div>

          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <img src={metamask} style={{ width: "80%", maxWidth: "200px" }} />
            
          </div>

          <Button
            onClick={connectmetamask}
            style={{
              ...buttonStyle,
              width: "100%",
              marginTop: "20px", // Add top margin for spacing
              backgroundColor: "#F6851B",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Connect Metamask
          </Button>
        </Box>
      </Modal>

      {openconnectmetamask && (
        <Desktop
          open={openconnectmetamask}
          handleOpen={handleconnectmetamaskOpen}
          handleClose={handleconnectmetamaskClose}
        />
      )}
    </div>
  );
};

export default Connectmodal;
