import { useEffect, useState } from "react";
// import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import AnimateHeight from "react-animate-height";

// Images
import value2x from "assets/images/value@2x.png";

// const useStyles = createUseStyles((Themes) => {
//   return {};
// });

function Value(props) {
  return (
    <section className="value main-theme-color">
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <p className="amount-title">Total value delivered by Standard</p>
            <img src={value2x} alt="value $2,699,989,579" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;
