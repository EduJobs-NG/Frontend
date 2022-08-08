import { Outlet } from "react-router-dom";

import { Sidebar } from "../features/Sidebar";
import { Header } from "../features/Header";

export const Layout = ({ pageTitle }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar pageTitle={pageTitle} />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
        <Header pageTitle={pageTitle} />
        <main
          style={{
            background: "#D9D9D9",
            padding: "25px 45px",
            flexGrow: "1",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};
