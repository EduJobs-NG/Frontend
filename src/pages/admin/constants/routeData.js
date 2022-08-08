import dashboard from "../assets/dashboard.svg";
import job from "../assets/job.svg";
import user from "../assets/user.svg";
import document from "../assets/document.svg";
import message from "../assets/message.svg";
import faq from "../assets/faq.svg";
import settings from "../assets/settings.svg";
import logout from "../assets/logout.svg";

export const navs = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: dashboard,
  },
  {
    name: "Jobs",
    path: "/admin/jobs",
    icon: job,
  },
  {
    name: "Manage Users",
    icon: user,
    options: [
      {
        name: "Manage Users",
        path: "/admin/manage-users",
        icon: "",
      },
      {
        name: "Manage Users",
        path: "/admin/manage-users",
        icon: "",
      },
    ],
  },
  {
    name: "Documents",
    icon: document,
    options: [
      {
        name: "Documents",
        path: "/admin/documents",
        icon: "",
      },
      {
        name: "Documents",
        path: "/admin/documents",
        icon: "",
      },
    ],
  },
  {
    name: "Messaging",
    path: "/admin/messaging",
    icon: message,
  },
  {
    name: "FAQs",
    path: "/admin/faq",
    icon: faq,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: settings,
  },
  {
    name: "Logout",
    path: "/admin/logout",
    icon: logout,
  },
];
