import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import metamasklogo from "./images/logo/metamask-logo.png";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "460px",
  height: "687.5px",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "20px",
  borderRadius: 2,
};
const buttonBlock = {
  padding: "8px",
  cursor: "pointer",
  backgroundColor: "white",
  fontSize: "12px",
  textAlign: "center",
  color: "rgb(36, 41, 46)",
  flex: "1 1 0%",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 300ms linear", // Corrected the transition syntax
  borderRadius: "8px",
};
const tabStyles = {
  fontSize: "12px",
  marginBottom: "16px",
  borderRadius: "8px",
  padding: "10px",
  border: "2px solid rgb(242, 244, 246)",
  color: "rgb(36, 41, 46)",
};
const flexStyles = {
  padding: "6px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};
const flexStylesimage = {
  flex: "1 1 0%",
  justifyContent: "center",
  alignItems: "center",
  width: 32.03,
};
const flexStylestext = {
  flex: "11 1 0%", // Equivalent to "flex: 11 1 0%" in CSS
  justifyContent: "center", // Aligns items along the main axis (center horizontally)
  alignItems: "center", // Aligns items along the cross axis (center vertically)
  marginLeft: 12,
};
const buttonStyles = {
  marginTop: "41.5px",
  marginBottom: "20px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 20px",
  background: "rgb(3, 125, 214)",
  borderRadius: "32px",
  color: "white",
  border: "0px",
  fontSize: "14px",
  cursor: "pointer",
};
const Desktop = ({ open, handleClose }) => {
  const [walletstatus, setWalletstatus] = useState(false);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setWalletstatus(true);
    } else {
      setWalletstatus(false);
    }
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div>
              <Button
                style={{
                  float: "right",
                  height: "24px",
                  padding: 0,
                  justifyContent: "end",
                }}
                onClick={handleClose}
              >
                X
              </Button>
            </div>

            <div
              style={{
                marginTop: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={metamasklogo} style={{ width: 273, height: 51 }} />
            </div>

            <div>
              <div
                style={{
                  padding: 4,
                  backgroundColor: "rgb(242, 244, 246)",
                  borderRadius: 8,
                  marginBottom: 30,
                  marginTop: 30,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={buttonBlock}>Desktop</div>
                </div>
              </div>

              <div id="noneextension">
                <div style={tabStyles}>
                  <div style={flexStyles}>
                    <div style={flexStylesimage}>
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
                          fill="#037DD6"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div style={flexStylestext}>
                        <span style={{ lineHeight: 2, color: "black" }}>
                          Trusted by over 30 million users to buy, store, send
                          and swap crypto securely
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={tabStyles}>
                  <div style={flexStyles}>
                    <div style={flexStylesimage}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.28 7.53V6.28C16.28 3.58 15.63 0 10 0C4.37 0 3.72 3.58 3.72 6.28V7.53C0.92 7.88 0 9.3 0 12.79V14.65C0 18.75 1.25 20 5.35 20H14.65C18.75 20 20 18.75 20 14.65V12.79C20 9.3 19.08 7.88 16.28 7.53ZM10 16.74C8.33 16.74 6.98 15.38 6.98 13.72C6.98 12.05 8.34 10.7 10 10.7C11.66 10.7 13.02 12.06 13.02 13.72C13.02 15.39 11.67 16.74 10 16.74ZM5.35 7.44C5.27 7.44 5.2 7.44 5.12 7.44V6.28C5.12 3.35 5.95 1.4 10 1.4C14.05 1.4 14.88 3.35 14.88 6.28V7.45C14.8 7.45 14.73 7.45 14.65 7.45H5.35V7.44Z"
                          fill="#037DD6"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div style={flexStylestext}>
                        <span style={{ lineHeight: 2, color: "black" }}>
                          The leading crypto wallet & gateway to blockchain apps
                          built on Ethereum Mainnet, Polygon, Optimism, and many
                          other networks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={tabStyles}>
                  <div style={flexStyles}>
                    <div style={flexStylesimage}>
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.0002 7.9702V10.0302C20.0002 10.5802 19.5602 11.0302 19.0002 11.0502H17.0402C15.9602 11.0502 14.9702 10.2602 14.8802 9.1802C14.8202 8.5502 15.0602 7.9602 15.4802 7.5502C15.8502 7.1702 16.3602 6.9502 16.9202 6.9502H19.0002C19.5602 6.9702 20.0002 7.4202 20.0002 7.9702Z"
                          fill="#037DD6"
                        ></path>
                        <path
                          d="M18.47 12.55H17.04C15.14 12.55 13.54 11.12 13.38 9.3C13.29 8.26 13.67 7.22 14.43 6.48C15.07 5.82 15.96 5.45 16.92 5.45H18.47C18.76 5.45 19 5.21 18.97 4.92C18.75 2.49 17.14 0.83 14.75 0.55C14.51 0.51 14.26 0.5 14 0.5H5C4.72 0.5 4.45 0.52 4.19 0.56C1.64 0.88 0 2.78 0 5.5V12.5C0 15.26 2.24 17.5 5 17.5H14C16.8 17.5 18.73 15.75 18.97 13.08C19 12.79 18.76 12.55 18.47 12.55ZM11 6.75H5C4.59 6.75 4.25 6.41 4.25 6C4.25 5.59 4.59 5.25 5 5.25H11C11.41 5.25 11.75 5.59 11.75 6C11.75 6.41 11.41 6.75 11 6.75Z"
                          fill="#037DD6"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div style={flexStylestext}>
                        <span style={{ lineHeight: 2, color: "black" }}>
                          Puts you in control of your digital interactions by
                          making power of cryptography more accessible
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button style={buttonStyles}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 2V14.88"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15.3504 12.6499L12.0004 15.9999L8.65039 12.6499"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span style={{ marginLeft: 10 }}>
                    <a
                      style={{
                        all: "unset",
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "inherit",
                        background: "none",
                        padding: "0",
                        margin: "0",
                        display: "inline",
                      }}
                      href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                      target="blank"
                    >
                      Install MetaMask Extension
                    </a>
                  </span>
                </button>
              </div>
            
            </div>

            <div></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Desktop;
