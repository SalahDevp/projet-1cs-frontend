import React, { useState } from "react";
const Test = () => {
  const [isDestroyed, setIsDestroyed] = useState(false);
  const handleClick = () => {
    setIsDestroyed(true);
  };
  return (
    <button
      disabled={isDestroyed}
      onClick={handleClick}
    >
      <span>Self-Destructing Button</span>
      <span
        style={{
          animation: `self-destruct 1s ease-in-out forwards`,
          animationFillMode: "forwards",
          opacity: isDestroyed ? 0 : 1,
        }}
      >
        <span style={{ display: "inline-block", width: "100%", height: "100%" }} />
      </span>
    </button>
  );
};
export default Test;