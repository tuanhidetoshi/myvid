import React from "react";

const ButtonGroup = props => {
  return (
    <div className="btn-group">
      <button className="btn btn-03" onClick={props.onSlow}>
        Slower
      </button>
      <button className="btn btn-02" onClick={props.onReset}>
        Reset
      </button>
      <button className="btn btn-01" onClick={props.onFast}>
        Faster
      </button>
      <button className="btn btn-04" onClick={props.onTriggle}>
        Pause/Start
      </button>
    </div>
  );
};

export default ButtonGroup;
