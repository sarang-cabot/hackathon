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
  const divStyle = {
    border: "2px solid #333",
    padding: "20px",
    borderRadius: "5px",
  };

  const pStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "initial",
    display: "flex",
    justifyContent: "space-between",
  };

  const HeaderStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "initial",
  };

  const spanStyle = {
    paddingLeft: "95px",
    fontSize: "14px",
  };

  const spanBottomStyle = {
    paddingLeft: "25px",
    fontSize: "14px",
  };

  const listItems = [
    {
      title: "Present Pregnancy",
      icon: "/image1.svg",
    },
    {
      title: "Patient Vitals",
      icon: "/image2.svg",
    },
    {
      title: "Antenatal Profile",
      icon: "/image3.svg",
    },
    {
      title: "Weight Monitoring Chart",
      icon: "/image4.svg",
    },
  ];
  // const pStyle = {
  //   fontSize: "14px",
  //   fontWeight: "bold",
  //   textAlign: "initial",
  // };
  return (
    <div>
      <div className="Profile-box">
        <div className="Profile-box-container">
          <div className="Profile-box-spliter">
            <div style={{ padding: "5px" }}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>JH</Avatar>
            </div>
            <div
              style={{
                paddingLeft: "30px",
              }}
            >
              <p>
                Client Name : <span style={spanStyle}>Jhon Paul</span>
              </p>
              <p>
                Patient Id : <span style={spanStyle}>CFH85546</span>
              </p>

              <p>
                Age : <span style={spanStyle}>27</span>
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="Profile-box-spliter-bottom">
            <div>
              <h5 className="HeaderStyle">Patient Contact</h5>
              <p style={pStyle}>
                Patient Id : <span style={spanBottomStyle}>CFH85546</span>
              </p>

              <p style={pStyle}>
                Age : <span style={spanBottomStyle}>27</span>
              </p>
            </div>
            <div style={{ paddingTop: "15px", paddingLeft: "80px" }}>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                <WifiCalling3Icon></WifiCalling3Icon>
              </Avatar>
              {/* <Avatar>
          
              </Avatar> */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <h4>Patient Information :</h4>
      </div>

      <Accordian cardData={listItems}></Accordian>
    </div>
  );
}

export default ProfileBox;
