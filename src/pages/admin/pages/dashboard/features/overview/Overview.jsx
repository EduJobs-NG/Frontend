import { WrapperHeader } from "../../../../components/WrapperHeader";

import { userDetails } from "./constants";

export const Overview = () => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "30px",
      }}
    >
      <WrapperHeader title="Overview" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(13.5em, 1fr))",
          gap: " 12px",
          paddingInline: "40px",
          paddingBottom: "29px",
        }}
      >
        {userDetails.map((userDetails) => (
          <div
            key={userDetails.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "#F0F0F0",
              borderRadius: "10px",
              padding: "13px 25px",
            }}
          >
            <img src={userDetails.icon} alt="icon" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  color: "#303030",
                }}
              >
                {userDetails.title}
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "#000",
                }}
              >
                {userDetails.number}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
