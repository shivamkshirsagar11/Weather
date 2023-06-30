import React from "react";
export default function Spinner() {
  return (
    <div className="text-center p-5">
      <div className="spinner-border m-5 text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border m-5 text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border m-5 text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border m-5 text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
