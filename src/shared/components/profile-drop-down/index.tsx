// src/components/ProfileDropdown.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutHelper } from "@/features/auth/utilities/auth";
import { appRoutes } from "@/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LogoutDialog from "../log-out-dialog/index"; // Import the LogoutDialog
import "./style.css";

interface ProfileDropdownProps {
  onClose: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const menuItems = [
    {
      icon: <AccountCircleOutlinedIcon fontSize="small" />,
      label: "Manage My Account",
      onClick: () => navigate(appRoutes.home || "/profile"),
    },
    {
      icon: <ShoppingBagOutlinedIcon fontSize="small" />,
      label: "My Order",
      onClick: () => navigate(appRoutes.home || "/orders"),
    },
    {
      icon: <CancelOutlinedIcon fontSize="small" />,
      label: "My Cancellations",
      onClick: () => navigate(appRoutes.home || "/cancellations"),
    },
    {
      icon: <StarBorderOutlinedIcon fontSize="small" />,
      label: "My Reviews",
      onClick: () => navigate(appRoutes.home || "/reviews"),
    },
    {
      icon: <LogoutOutlinedIcon fontSize="small" />,
      label: "Logout",
      onClick: () => setOpenLogoutDialog(true), // Open the dialog
    },
  ];

  const handleLogout = () => {
    logoutHelper();
    // You might also want to update your state management or redirect here
  };

  return (
    <>
      <div
        className="glass-card absolute right-0 mt-3 w-56 rounded-2xl py-3 shadow-xl z-50 backdrop-blur-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col space-y-1 ">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  item.onClick();
                  if (item.label !== "Logout") {
                    onClose();
                  }
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition hover:bg-white/20 hover:translate-x-1"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Dialog */}
      <LogoutDialog
        open={openLogoutDialog}
        onClose={() => setOpenLogoutDialog(false)}
        onLogout={handleLogout}
      />
    </>
  );
};

export default ProfileDropdown;
