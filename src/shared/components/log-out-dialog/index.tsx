// src/components/LogoutDialog.tsx
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Button from "@mui/material/Button";
import "./style.css"; // Create a new CSS file for the dialog styles

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutDialog: React.FC<LogoutDialogProps> = ({
  open,
  onClose,
  onLogout,
}) => {
  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: "logout-dialog" }}>
      <DialogTitle className="dialog-title">Logout</DialogTitle>
      <DialogContent className="dialog-content">
        Are you sure you want to logout? All cached data will be cleared.
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={onClose} className="cancel-button">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className="logout-button"
        >
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
