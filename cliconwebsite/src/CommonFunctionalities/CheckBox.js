import React from "react";

export function CheckBox(props) {
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          {props.title}
        </label>
      </div>
    </div>
  );
}
