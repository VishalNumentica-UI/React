import React from "react";

export function RadioButton(props) {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          {props.title}
        </label>
      </div>
    </div>
  );
}
