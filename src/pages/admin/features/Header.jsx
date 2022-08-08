import notification from "../assets/notification.svg";
import profile from "../assets/profile.svg";

export const Header = ({ pageTitle }) => {
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "10px 23px",
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#000",
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "24px",
        }}
      >
        {pageTitle}
      </h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <div
          style={{
            position: "relative",
            width: "40px",
            height: "40px",
            background: "#E6E6E6",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            src={notification}
            alt="notification"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "40px",
            height: "40px",
            background: "#E6E6E6",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
};
