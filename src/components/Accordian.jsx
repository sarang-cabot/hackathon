import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Accordian({ cardData, isHeader, pageName }) {
  return (
    <div>
      {isHeader && (
        <Card
          sx={{ minWidth: 275 }}
          style={{
            margin: "1px",
            paddingBottom: "10px",
            marginBottom: "5px",
            background: "#5697C6",
          }}
        >
          <CardContent>
            <Typography
              variant="p"
              component="div"
              style={{ color: "white", marginTop: "10px" }}
            >
              Mother & Fetel Assessment
            </Typography>
          </CardContent>
        </Card>
      )}

      {pageName == "Patient" &&
        cardData.map((data, index) => (
          <Card
            key={index}
            sx={{ minWidth: 275 }}
            style={{
              margin: "5px",
              marginBottom: "10px",
              background: "#E7F4FC",
            }}
          >
            <CardContent style={{ display: "flex" }}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{data.name.charAt(0) + data.name.charAt(1)}</Avatar>
              <Typography
                style={{ marginTop: "10px", paddingLeft: "5px" }}
                variant="p"
                component="div"
              >
                {data.name}
              </Typography>
            </CardContent>
          </Card>
        ))}

      {pageName !== "Patient" &&
        cardData.map((data, index) => (
          <Card
            key={index}
            sx={{ minWidth: 275 }}
            style={{
              margin: "5px",
              marginBottom: "10px",
              background: "#E7F4FC",
            }}
          >
            <CardContent style={{ display: "flex" }}>
              <img
                src={data.icon} // Replace this with the URL of the image you want to use
                alt="Card"
                style={{ width: "60px", marginRight: "10px", height: "40px" }}
              />
              <Typography
                style={{ marginTop: "10px" }}
                variant="p"
                component="div"
              >
                {data.title}
              </Typography>
            </CardContent>
          </Card>
        ))}

      {pageName == "Vital" &&
        cardData.map((data, index) => (
          <Card
            key={index}
            sx={{ minWidth: 275 }}
            style={{
              margin: "5px",
              marginBottom: "10px",
              background: "#E7F4FC",
            }}
          >
            <CardContent style={{ display: "flex" }}>
              <img
                src={data.icon} // Replace this with the URL of the image you want to use
                alt="Card"
                style={{ width: "60px", marginRight: "10px", height: "40px" }}
              />
              <Typography
                style={{ marginTop: "10px" }}
                variant="p"
                component="div"
              >
                {data.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
