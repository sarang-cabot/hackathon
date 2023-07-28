import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Accordian({ cardData }) {
  return (
    <div>
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
      {cardData.map((data, index) => (
        <Card
          key={index}
          sx={{ minWidth: 275 }}
          style={{ margin: "5px", marginBottom: "10px", background: "#E7F4FC" }}
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
