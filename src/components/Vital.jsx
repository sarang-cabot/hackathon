import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { deepOrange, deepPurple } from "@mui/material/colors";
import Accordian from "./Accordian";
import Avatar from "@mui/material/Avatar";
function Vital() {
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

  const pStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "initial",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  };

  //     font-size: 14px;
  //   font-weight: bold;
  //   text-align: initial;
  //   display: flex;
  //   justify-content: space-between;

  const spanStyle = {
    // paddingLeft: "95px",
    fontSize: "18px",
  };

  return (
    <div style={{ marginTop: "75px", padding: "10px" }}>
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}></div>

      <Accordian
        pageName={"Vital"}
        isHeader={false}
        cardData={listItems}
      ></Accordian>
    </div>
  );
}

export default Vital;
