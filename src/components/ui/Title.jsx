import React from "react";

const Title = ({ children, addClass }) => {
  return <div className={`${addClass} font-permaMarker`}>{children}</div>;
};

export default Title;
