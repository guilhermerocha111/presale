import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import WalletProviders from "./NetworkWalletProviders";
import WalletIcon from "../ui/icons/Wallet";
import Modal from "@mui/material/Modal";
import { Box, Dialog } from "@mui/material";
import  metamask from "./../../assets/images/icons/metamask-fox.svg";
import Metamask from "components/meta";

const Unauthenticated = () => {
  const [walletProvidersDialogOpen, setWalletProvidersDialogOpen] =
    useState(false);
  const [checkconnect, setCheckconnect] = useState(false);
  const handleWalletProvidersDialogToggle = () => {
    setCheckconnect(false);
    setWalletProvidersDialogOpen(!walletProvidersDialogOpen);
  };
  const checkconnecttoggle = () => {
    setCheckconnect(!checkconnect);
  };
  const dstyle = {
    position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 357,
  height: 400,
  bgcolor: "white",
  // border: "1px solid #000",
  boxShadow: 12,
  borderRadius:12
  };

  return (
    <Fragment>
      <Metamask />
      {/* <Button
        variant="contained"
        disableElevation
        fullWidth
        onClick={checkconnecttoggle}
        startIcon={<WalletIcon />}
        sx={{ boxShadow: "rgb(0 0 0 / 8%) 0px 8px 28px" }}
      >
        Wallet Connect
      </Button> */}
      <WalletProviders
        walletProvidersDialogOpen={walletProvidersDialogOpen}
        handleWalletProvidersDialogToggle={handleWalletProvidersDialogToggle}
      />
      <Dialog
        open={checkconnect}
        onClose={checkconnecttoggle}
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
        open={checkconnect}
        onClose={checkconnecttoggle}
          overlay="true"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={dstyle}>
            <div style={{width:'100%',height:300}}>
              <img src={metamask} style={{marginTop:'10%',marginLeft:'20%',width:'60%'}}></img>
            </div>
            <Button
              style={{width:"60%",marginLeft:"20%"}}
              variant="contained"
              disableElevation
              fullWidth
              onClick={handleWalletProvidersDialogToggle}
              startIcon={<WalletIcon />}
              sx={{ boxShadow: 'red' }}
            >
              Connect Metamask
            </Button>
          </Box>
        </Modal>
      </Dialog>
    </Fragment>
  );
};

export default Unauthenticated;
