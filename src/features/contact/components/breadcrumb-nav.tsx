import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface BreadcrumbsNavProps {
  current: string;
}

const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ current }) => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
        Home
      </Link>
      <Typography color="text.primary">{current}</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
