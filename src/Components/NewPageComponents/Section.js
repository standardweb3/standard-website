import styled from "styled-components";
import Home from "Components/NewPageComponents/Home";
import React from "react";

function Section({ className, children, reload }) {
  return (
    <div className={`${className} newpage__section ${reload}`}>{children}</div>
  );
}

export default React.memo(styled(Section)``);
