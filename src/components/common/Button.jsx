import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";

const Button = ({
  clickEvent,
  title,
  className,
  attributes,
  enableLink = false,
  type = "button", // Default button type
  btnType = "style1",
}) => {
  // Handle the event on click of Button
  const checkEvent = () => {
    if (clickEvent && !attributes?.disable) {
      clickEvent();
    }
  };
  if (enableLink) {
    return (
      <Link
        to={clickEvent}
        className={`btn ${btnType} ${className} transition duration-300 ease-in-out transform active:scale-95 inline-block`}
        {...attributes}
      >
        <span className={`font-medium`}>{title}</span>
      </Link>
    );
  }
  return (
    <button
      onClick={checkEvent}
      className={`btn ${btnType} ${className} transition duration-300 ease-in-out transform active:scale-95 ${
        attributes?.disable &&
        "disabled:opacity-50 disabled:pointer-events-none"
      }`}
      type={type}
      {...attributes}
    >
      <span className={`font-medium`}>{title}</span>
    </button>
  );
};

// Define prop types
Button.propTypes = {
  clickEvent: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  btnType: PropTypes.oneOf(["style1", "style2", "style3"]), // You can specify valid types if needed
  title: PropTypes.string.isRequired, // Assuming title is required
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Valid button types
  attributes: PropTypes.object,
  enableLink: PropTypes.bool,
};
export default Button;
