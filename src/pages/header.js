import { Outlet, Link } from "react-router-dom";
import "./header.css";

import PnfLogo from "./pnf-logo";

function Headers() {
  return (
    <div>
      <div className="header-menu-bar-container">
        <PnfLogo />

        <Link className="link" to="new path 1">Home</Link>
        <Link className="link" to="new path 2">Make Appointment</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Headers;
