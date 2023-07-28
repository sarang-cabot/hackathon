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
import { useSearchParams } from "react-router-dom";
import { getParsedPatients } from "../get/data";

function ProfileBox() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const patients = getParsedPatients();
  const  id  = searchParams.get("id");
  const patient = patients.find((item) => item.id == id);
  console.log("patients::", patient);
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
    paddingLeft: "75px",
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
    <div style={{ marginTop: "75px", padding: "10px" }}>
      <div className="Profile-box">
        <div className="Profile-box-container">
          <div className="Profile-box-spliter">
            <div style={{ padding: "5px" }}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{patient.name.charAt(0)}</Avatar>
            </div>
            <div
              style={{
                paddingLeft: "30px",
              }}
            >
              <p>
                Client Name : <span style={spanStyle}>{patient.name}</span>
              </p>
              <p>
                Patient Id : <span style={spanStyle}>{patient.id.split('-')[2]}</span>
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
                State: <span style={spanBottomStyle}>{patient.state}</span>
              </p>

              <p style={pStyle}>
                City : <span style={spanBottomStyle}>{patient.city}</span>
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

      <Accordian pageName={"Profile"} cardData={listItems}></Accordian>
    </div>
  );
}

export default ProfileBox;
