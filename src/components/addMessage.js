import React from "react";
import PropTypes from "prop-types";

const AddMessage = (props) => {
  let input;

  return (
    <section id="new-message">
      <input 
        type="text"
        ref={ node => input = node }
        onKeyPress={ e => {
          if (e.key === "Enter") {
            props.dispatch(input.value, 'ME');
            input.value = "";
          }
        }} />
    </section>
  );
}

AddMessage.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage;