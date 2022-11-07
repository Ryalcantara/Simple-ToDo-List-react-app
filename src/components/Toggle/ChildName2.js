import React, {useState} from "react";
import gif from "../../img/ezgif-4-4558fbf413.gif";

function ChildName2(props) {
  
  return (
    <div>
  <img
        src={gif}
        className={props.toggle ? "dummy" : "notDummy"}
        alt="ignored"
      ></img>
      <button type="button" className="btn btn-success" onClick={props.onToggle}>{props.children}</button>
    </div>
  );
}

export default ChildName2;
