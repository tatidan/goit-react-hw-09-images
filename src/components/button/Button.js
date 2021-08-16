import React from "react";

const Button = ({ fetchPhotos }) => {
  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      fetchPhotos();
    }
  };

  return (
    <button className="Button" type="button" onClick={handleClick}>
      Load more
    </button>
  );
};

export default Button;
