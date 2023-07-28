import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import "./ProfileBox.css";
import Avatar from "@mui/material/Avatar";
import Accordian from "./Accordian";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import { red } from "@mui/material/colors";
import { deepOrange, deepPurple } from "@mui/material/colors";

function ProfileBox() {
  return (
    <div style={{ marginTop: "75px", padding: "10px", textAlign: "center" }}>
      <img
        src="/splash.svg" // Replace this with the URL of the image you want to use
      />
    </div>
  );
}

export default ProfileBox;
