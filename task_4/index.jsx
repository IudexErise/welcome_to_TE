import { useState } from "react";

export const Block = ({ mouseEnterCallback, imgSrc, imgAlt, content, userData }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallback();
  };

  function displayContent() {
    if (imgSrc) {
      return <img src={imgSrc} alt={imgAlt} />;
    }
    if (content) {
      return <p>{content}</p>;
    }
    if (userData) {
      return (
        <address>
          country: {userData.country}, street: {userData.street}
        </address>
      );
    }
    return null;
  }

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {displayContent()}
    </div>
  );
};
