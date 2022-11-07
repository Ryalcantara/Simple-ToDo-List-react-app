import React, { useEffect, useState } from "react";
import ChildName2 from "./ChildName2";
import gif from "../../img/ezgif-4-4558fbf413.gif";

function PrintSomething() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log(toggle);
  });

  return (
    <div>
      <img
        src={gif}
        className={toggle ? "dummy" : "notDummy"}
        alt="ignored"
      ></img>
      <ChildName2 toogs={toggle} onToggle={() => setToggle(!toggle)}>
        Toggle Paimon
      </ChildName2>
    </div>
  );
}

export default PrintSomething;
