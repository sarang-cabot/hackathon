import React from "react";
import { Outlet, useLocation } from "react-router-dom";
function Layout() {
  const location = useLocation();

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "#5697C6",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white", marginLeft: "10px" }}>
          {location.pathname.replace("/", "")}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
