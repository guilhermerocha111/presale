import React from "react";
import { Box, Modal } from "@mui/material";
import { UserContext } from ".";
import { useContext, useState } from "react";
import {
  addImage,
  closeImage,
  searchImage,
  ethereum,
  linea,
  polygon,
  arbitrum,
  avalanche,
  base,
  binance,
  opmain,
  zksync,
  moreverfical,
  infoimage,
  sepolia,
  lineasepolia,
} from "./image";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const style = {
  position: "absolute",
  top: "0px",
  // left: "50%",
  right: "0px",
  // transform: "translate(-50%, -50%)",
  width: 357,
  height: 600,
  bgcolor: isDarkMode === true ? "black" : "rgba(21, 22, 22, 0.67)",
};
const netstyle = {
  position: "absolute",
  top: "16px",
  right: "16px",
  // transform: "translate(-50%, -50%)",
  width: 325,
  height: 568,
  bgcolor:isDarkMode === true ? "rgb(21, 22, 22)" : "white" ,
  // border: "1px solid rgba(21, 22, 22, 0.67)",
  borderRadius: "9px",
  // boxShadow: "0px 4px 20px rgba(21, 22, 22, 0.67)"
};

const Networkmodal = () => {
  //useContext

  const data = useContext(UserContext);
  const open = data.networkmodal;
  const handleClose = () => data.setNetworkmodal(!open);
  //   const currentnet=data.currentnet;
  const setCurrentnet = data.setCurrentnet;
  //consts
  const [borderWidth, setBorderWidth] = useState("0.5px");
  const [searchnet, setSearchnet] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [enablednet, setEnablednet] = useState([
    { id: "ethereummainnet", icon: ethereum, text: "Ethereum Mainnet" },
    { id: "linea", icon: linea, text: "Linea" },
  ]);
  //   const [currentnet, setCurrentnet] = useState({
  //     id: "ethereummainnet",
  //     icon: ethereum,
  //     text: "Ethereum Mainnet",
  //   });
  const selectnet = (id, icon, text) => {
    setCurrentnet({ id: id, icon: icon, text: text });
    handleClose();
  };
  const [additionalnet, setAdditionalnet] = useState([
    { id: "arbitrumone", icon: arbitrum, text: "Arbitrum One" },
    { id: "polygonmainnet", icon: polygon, text: "Polygon Mainnet" },
    {
      id: "avalanchenetworkc-chain",
      icon: avalanche,
      text: "Avalanche Network C-Chain",
    },
    { id: "basemainnet", icon: base, text: "Base Mainnet" },
    { id: "binancesmartchain", icon: binance, text: "Binance Smart Chain" },
    { id: "opmainnet", icon: opmain, text: "OP Mainnet" },
    { id: "zksynceramainnet", icon: zksync, text: "zkSync Era Mainnet" },
  ]);
  const [testnet, setTestnet] = useState([
    { id: "sepolia", icon: sepolia, text: "Sepolia" },
    { id: "lineasepolia", icon: lineasepolia, text: "Linea Sepolia" },
  ]);

  const enabledstate = enablednet.filter((item) =>
    item.id.includes(searchnet.toLocaleLowerCase())
  ).length;
  const additionalstate = additionalnet.filter((item) =>
    item.id.includes(searchnet.toLocaleLowerCase())
  ).length;
  const testnetstate = testnet.filter((item) =>
    item.id.includes(searchnet.toLocaleLowerCase())
  ).length;

  const clickOut = () => {
    handleClose();
    data.setMainmodal(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={clickOut}
        // overlay="true"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={netstyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                // position: "relative",
              }}
            >
              <div
                style={{
                  position: "fixed",
                  top: 22,
                  width: "325px",
                  height: "56px",
                  padding: "16px",
                  //   width: "calc(100% - 48px)",
                  //   marginLeft: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    width: "245px",
                    fontSize: 14.5,
                    color:isDarkMode === true ? "white" : "black"
                  }}
                >
                  <b>Select a network</b>
                </div>

                <div style={{ width: "24px" }}>
                  <span
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgb(235 245 238/50%)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                    }}
                    onClick={handleClose}
                    style={{
                      display: "inline-block", // Ensure the span behaves properly as a container
                      width: "100%",
                      height: "24px", // Set height explicitly to match the container
                      backgroundColor: 'background.paper', // Default background color
                      borderRadius: "4px", // Optional: adds a smoother hover effect
                      textAlign: "center", // Aligns the content in the middle
                      cursor: "pointer", // Adds pointer cursor for interactivity
                    }}
                  >
                    <img
                      className="app-header__metafox-logo--icon"
                      src={closeImage}
                      alt="Close Icon"
                      style={{
                        display: "block",
                        width: "12px",
                        height: "auto",
                        margin: "5px auto", // Centers the image vertically and horizontally
                        filter: isDarkMode === true ? "invert(1)" : "invert(0)",
                      }}
                    />
                  </span>
                </div>
              </div>

              <div
                style={{
                  width: "325px",
                  marginTop: 56,
                  height: 432,
                  display: "flex",
                  whiteSpace: "nowrap",
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
              >
                <div>
                  <div
                    style={{
                      paddingTop: 0,
                      paddingLeft: 16,
                      paddingBottom: 8,
                      paddingRight: 16,
                      width: "100%",
                      height: 56,
                    }}
                  >
                    <div
                      style={{
                        paddingLeft: 16,
                        width: "100%",
                        height: "100%",
                        border: `${borderWidth} solid #848c96`, // Dynamic border width
                        borderRadius: 4,
                        display: "flex",
                      }}
                    >
                      <span
                        style={{
                          width: 16,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={searchImage}
                          alt="Search Icon"
                          style={{ width: "100%",filter: isDarkMode === true ? "invert(1)" : "invert(0)" }}
                          
                        />
                      </span>
                      <span
                        style={{
                          width: 245,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          value={searchnet}
                          onChange={(e) => setSearchnet(e.target.value)}
                          placeholder="Search"
                          onFocus={() => setBorderWidth("2px")} // Thicker border on focus
                          onBlur={() => setBorderWidth("0.5px")} // Weaker border on blur
                          style={{
                            color:isDarkMode === true ? "white" : "black",
                            fontSize: 13,
                            border: "none",
                            width: 210,
                            paddingLeft: 8,
                            paddingRight: 8,
                            height: 22,
                            outline: "none", // No outline
                            // bgColor: isDarkMode === true ? "rgba(21, 22, 22, 0.67)" : "white",
                            backgroundColor: isDarkMode === true ? "rgba(21, 22, 22, 0.67)" : "white",
                          }}
                        />
                        <span>
                          {searchnet !== "" && (
                            <img
                              onClick={(e) => {
                                setSearchnet("");
                              }}
                              className="app-header__metafox-logo--icon"
                              src={closeImage}
                              alt="Close Icon"
                              style={{
                                display: "block",
                                width: "12px",
                                height: "auto",
                                margin: "5px auto", // Centers the image vertically and horizontally
                              }}
                            />
                          )}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div>
                    {enabledstate !== 0 && (
                      <div
                        id="active-network"
                        style={{
                          width: "100%",
                          height: 54,
                          padding: 16,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            color: "#9fa6ae",
                            fontSize: 13,
                          }}
                        >
                          Enabled networks
                        </span>
                      </div>
                    )}

                    <div>
                      {enablednet.map((item, index) => {
                        if (
                          item.id.includes(searchnet.toLocaleLowerCase()) ===
                          true
                        ) {
                          return (
                            <div
                              onClick={() =>
                                selectnet(item.id, item.icon, item.text)
                              }
                              onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor =
                                isDarkMode === true ? "#1e2124" : "rgb(235 245 238 / 50%)";
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor =
                                isDarkMode === true ? "rgb(21, 22, 22)" : "white";
                              }}
                              key={index}
                              id="available-network"
                              style={{
                                width: "100%",
                                padding: 16,
                                height: 56,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center", // Corrected to align items properly
                                backgroundColor:isDarkMode === true ? "rgb(21, 22, 22)" : "white"
                              }}
                            >
                              <span>
                                <img
                                  src={item.icon}
                                  style={{
                                    width: 24,
                                    borderRadius: 6,
                                  }}
                                  alt={item.text} // Added alt attribute for accessibility
                                />
                              </span>
                              <span
                                className="mm-box mm-text mm-text--body-md mm-text--ellipsis mm-box--background-color-transparent"
                                style={{
                                  width: 196,
                                  fontSize: 15,
                                  paddingTop: 2,
                                  color:isDarkMode === true ?'white' :'#24272a' 
                                }}
                              >
                                {item.text}
                              </span>
                              <span>
                                <img
                                  src={moreverfical}
                                  style={{
                                    width: 16,
                                    borderRadius: 5,
                                    filter: isDarkMode === true ? "invert(1)" : "invert(0)"
                                  }}
                                  alt="More Options Icon" // Added alt attribute for accessibility
                                />
                              </span>
                            </div>
                          );
                        }
                        return null; // Return null if the condition is not met
                      })}
                    </div>

                    {/* working */}

                    {additionalstate !== 0 && (
                      <div
                        id="active-network"
                        style={{
                          width: "100%",
                          height: 54,
                          padding: 16,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            color: "#9fa6ae",
                            fontSize: 13,
                          }}
                        >
                          Additional networks
                          <span>
                            <img
                              src={infoimage}
                              style={{
                                width: 16,
                                marginLeft: 12,
                                filter:
                                  "invert(71%) sepia(0%) saturate(0%) brightness(93%)",
                              }}
                            ></img>
                          </span>
                        </span>
                      </div>
                    )}

                    <div>
                      {additionalnet.map((item, index) => {
                        if (
                          item.id.includes(searchnet.toLocaleLowerCase()) ===
                          true
                        ) {
                          return (
                            <div
                              key={index}
                              id="available-network"
                              style={{
                                width: "100%",
                                padding: 16,
                                height: 56,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span style={{}}>
                                <img
                                  src={item.icon}
                                  style={{
                                    width: 24,
                                    borderRadius: 6,
                                  }}
                                  alt={item.text} // Added alt attribute for accessibility
                                />
                              </span>
                              <span
                                className="mm-box mm-text mm-text--body-md mm-text--ellipsis mm-box--background-color-transparent"
                                style={{
                                  width: 196,
                                  fontSize: 15,
                                  paddingTop: 2,
                                  color:isDarkMode === true ?'white' :'#24272a' 
                                }}
                              >
                                {item.text}
                              </span>
                              <span
                                onMouseOver={(e) => {
                                  e.currentTarget.style.textDecoration =
                                    "underline"; // Set underline
                                  e.currentTarget.style.textDecorationColor =
                                    "#0376c9"; // Set color with transparency
                                  e.currentTarget.style.textDecorationThickness =
                                    "2px";
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.textDecoration = "none"; // Remove underline
                                }}
                                style={{
                                  fontWeight: 450,
                                  color: "#0376c9",
                                  fontSize: 14,
                                }}
                              >
                                Add
                              </span>
                            </div>
                          );
                        }
                        return null; // Return null if the condition is not met
                      })}
                    </div>

                    {testnetstate !== 0 && (
                      <div
                        id="active-network"
                        style={{
                          width: "100%",
                          height: 54,
                          padding: 16,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            color: "#9fa6ae",
                            fontSize: 13,
                          }}
                        >
                          Show test networks
                          <span></span>
                        </span>
                      </div>
                    )}

                    <div>
                      {testnet.map((item, index) => {
                        if (
                          item.id.includes(searchnet.toLocaleLowerCase()) ===
                          true
                        ) {
                          return (
                            <div
                              onClick={() =>
                                selectnet(item.id, item.icon, item.text)
                              }
                              onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor =
                                isDarkMode === true ? "#1e2124" : "rgb(235 245 238 / 50%)";
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor =
                                isDarkMode === true ? "rgb(21, 22, 22)" : "white";
                              }}
                              key={index}
                              id="available-network"
                              style={{
                                width: "100%",
                                padding: 16,
                                height: 56,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center", // Corrected to align items properly
                                backgroundColor:isDarkMode === true ? "rgb(21, 22, 22)" : "white"
                              }}
                            >
                              <span>
                                <img
                                  src={item.icon}
                                  style={{
                                    width: 24,
                                    borderRadius: 6,
                                  }}
                                  alt={item.text} // Added alt attribute for accessibility
                                />
                              </span>
                              <span
                                className="mm-box mm-text mm-text--body-md mm-text--ellipsis mm-box--background-color-transparent"
                                style={{
                                  width: 196,
                                  fontSize: 15,
                                  paddingTop: 2,
                                  color:isDarkMode === true ?'white' :'#24272a' 

                                }}
                              >
                                {item.text}
                              </span>
                              <span>
                                <img
                                  src={moreverfical}
                                  style={{
                                    width: 16,
                                    borderRadius: 5,
                                    filter: isDarkMode === true ? "invert(1)" : "invert(0)"
                                  }}
                                  alt="More Options Icon" // Added alt attribute for accessibility
                                />
                              </span>
                            </div>
                          );
                        }
                        return null; // Return null if the condition is not met
                      })}
                    </div>

                    {enabledstate === 0 &&
                      additionalstate === 0 &&
                      testnetstate === 0 && (
                        <div
                          style={{
                            color: "#9fa6ae",
                            fontSize: 15,
                            width: 325,
                            display: "flex",
                            textWrap: "wrap",
                            paddingLeft: 14,
                            paddingRight: 22,
                          }}
                        >
                          No networks found for the given search query
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "325px",
                  height: "80px",
                  position: "fixed",
                  top: 510,
                  padding: 16,
                }}
              >
                <div
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  style={{
                    height: "100%",
                    border: "1.4px solid #0376c9",
                    borderRadius: "26px",
                    textAlign: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 16,
                    paddingRight: 16,
                    color: isHovered ? "#ffffff" : "#0376c9", // Dynamic text color
                    backgroundColor: isHovered ? "#0376c9" :isDarkMode === true ? "rgb(21, 22, 22)" : "white", // Dynamic background color
                    cursor: "pointer", // Pointer cursor
                  }}
                >
                  <div>
                    <img
                      src={addImage}
                      alt="Add Icon"
                      style={{
                        width: "15px",
                        filter: isHovered
                          ? "invert(100%) sepia(1) saturate(5) hue-rotate(200deg)"
                          : "invert(20%) sepia(100%) saturate(5000%) hue-rotate(200deg)", // Change color using filters
                        transition: "filter 0.3s ease", // Smooth transition
                      }}
                    />
                    <font style={{ fontSize: 13, paddingLeft: 7 }}>
                      Add a custom network
                    </font>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Networkmodal;
