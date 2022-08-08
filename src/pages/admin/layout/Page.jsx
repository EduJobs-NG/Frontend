import { useParams } from "react-router-dom";

import { Jobs } from "../pages/Jobs";
import { ManageUsers } from "../pages/ManageUsers";
import { Documents } from "../pages/Documents";
import { Messaging } from "../pages/Messaging";
import { FAQ } from "../pages/FAQ";
import { Settings } from "../pages/Settings";
import { Logout } from "../pages/Logout";

export const Page = ({ setPageTitle }) => {
  const { page } = useParams();

  const currentPage = () => {
    switch (page) {
      case "jobs":
        setPageTitle("Jobs");
        return <Jobs />;
      case "manage-users":
        setPageTitle("Manage Users");
        return <ManageUsers />;
      case "documents":
        setPageTitle("Documents");
        return <Documents />;
      case "messaging":
        setPageTitle("Messaging");
        return <Messaging />;
      case "faq":
        setPageTitle("FAQ");
        return <FAQ />;
      case "settings":
        setPageTitle("Settings");
        return <Settings />;
      case "logout":
        setPageTitle("Logout");
        return <Logout />;
      default:
        setPageTitle("404 - Page Not Found");
        return;
    }
  };

  return currentPage();
};
