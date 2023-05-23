import { Outlet, Link } from "react-router-dom";
import "./header.css";

import PnfLogo from "./pnf-logo";

import { RecoilRoot, useRecoilValue } from "recoil";
import { displayLogout } from "./recoil_state";

function MyHeaders() {
  return (
    <div>
      <div className="header-menu-bar-container">
        <PnfLogo />

        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/appointment">
          Schedule Free Class
        </Link>
        <Link className="link" to="/signIn">
          Sign in
        </Link>
        <Link className="link" to="/createUser">
          Sign up
        </Link>
        
        {useRecoilValue(displayLogout) && (
          <Link className="link" to="/logOut">
            Sign out
          </Link>
        )}
      </div>

      <Outlet />
      </div>
  );
}


function Headers() {
  return (
    <RecoilRoot>
      <MyHeaders/>
    </RecoilRoot>
  )
}
export default Headers;
