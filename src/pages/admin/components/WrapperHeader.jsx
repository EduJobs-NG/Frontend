import React from "react";

export const WrapperHeader = ({ title }) => {
  return (
    <h3
      style={{
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "23px",
        color: "#000",
        padding: "18px 28px",
      }}
    >
      {title}
    </h3>
  );
};
