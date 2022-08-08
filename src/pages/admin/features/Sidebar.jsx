import { NavLink } from "react-router-dom";

import { navs } from "../constants/routeData";
import dropdown from "../assets/dropdown.svg";

export const Sidebar = ({ pageTitle }) => {
  return (
    <div
      className="bg-[#02378B]"
      style={{
        position: "sticky",
        top: "0",
        minWidth: "255px",
        height: "100vh",
        zIndex: "3",
      }}
    >
      <div
        style={{
          color: "#f0f0f0",
          margin: "45px 19px 20px",
          fontSize: "14px",
          fontWeight: "700",
          lineHeight: "24px",
        }}
      >
        Main Menu
      </div>
      <nav>
        <ul>
          {navs.map((nav) => (
            <>
              {nav.name === "Settings" && (
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#fff",
                    margin: "22px 34px 18px 10px",
                  }}
                ></div>
              )}
              <li key={nav.name}>
                <NavLink
                  to={`${nav.path}`}
                  style={() => {
                    return {
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "24px",
                      padding: "10px 24px",
                      backgroundColor: `${
                        pageTitle === nav.name ? "#FFFFFF80" : "inherit"
                      }`,
                      borderLeft: `${
                        pageTitle === nav.name ? "5px solid #D2E4FF" : "none"
                      }`,
                    };
                  }}
                >
                  <img
                    src={nav.icon}
                    alt="nav icons"
                    style={{ marginRight: "18px" }}
                  />
                  <div>{nav.name}</div>
                  {nav.name === "Documents" && (
                    <img
                      src={dropdown}
                      alt="icon"
                      style={{ marginLeft: "auto" }}
                    />
                  )}
                  {nav.name === "Manage Users" && (
                    <img
                      src={dropdown}
                      alt="icon"
                      style={{ marginLeft: "auto" }}
                    />
                  )}
                </NavLink>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </div>
  );
};
