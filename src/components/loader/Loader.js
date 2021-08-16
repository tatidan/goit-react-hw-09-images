import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner = () => {
  return (
    <Loader
      type="Puff"
      color="#00bfff"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};

export default LoaderSpinner;
