import React from "react";

const Button = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} btn btn-primary mt-3 py-4 px-8 rounded-sm`}
    >
      {title}
    </button>
  );
};

export default Button;
