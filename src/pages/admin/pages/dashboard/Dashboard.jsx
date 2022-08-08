import { Overview } from "./features/overview/Overview";
import { UserActivity } from "./features/userActivity/UserActivity";

export const Dashboard = ({ setPageTitle }) => {
  setPageTitle("Dashboard");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      <Overview />
      <UserActivity />
    </div>
  );
};
