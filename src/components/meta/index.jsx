import React from "react";
import Connectmodal from "./connectmodal";
import { useState, createContext } from "react";
import NetworkWalletProviders from "./mainmodal";
import Mainmodal from "./mainmodal";
import Networkmodal from "./networkmodal";
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
// const ethereum= "./assets/images/icons/eth_logo.svg"
const UserContext = createContext();
const Metamask = () => {
  const [mainmodal, setMainmodal] = useState(false);
  const [networkmodal, setNetworkmodal] = useState(false);
  const [currentnet, setCurrentnet] = useState({
    id: "ethereummainnet",
    icon: ethereum,
    text: "Ethereum Mainnet",
  });
  return (
    <UserContext.Provider
      value={{
        mainmodal: mainmodal,
        setMainmodal: setMainmodal,
        networkmodal: networkmodal,
        setNetworkmodal: setNetworkmodal,
        currentnet: currentnet,
        setCurrentnet: setCurrentnet,
      }}
    >
      <div>
        <Connectmodal />
        <Mainmodal />
        <Networkmodal />
      </div>
    </UserContext.Provider>
  );
};

export default Metamask;
export { UserContext };


























































































