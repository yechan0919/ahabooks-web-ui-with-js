import React from "react";

const BlackButton = ({ text }) => {
  return (
    <button className="bg-black text-bold text-white px-4 py-2 rounded-md">
      {text}
    </button>
  );
};

export default BlackButton;
