import React from "react";
import "../styles/RequiredInfologo.css";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <div className="required-info-header">
        <svg
          className="clipboard-icon"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2501_12997"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="26"
          >
            <path d="M0 0H24V26H0V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_2501_12997)">
            <path
              d="M2.66667 26C1.93333 26 1.30556 25.7454 0.783333 25.2362C0.261111 24.7271 0 24.115 0 23.4V5.2C0 4.485 0.261111 3.87292 0.783333 3.36375C1.30556 2.85458 1.93333 2.6 2.66667 2.6H8.26667C8.55556 1.82 9.03889 1.19167 9.71667 0.715C10.3944 0.238333 11.1556 0 12 0C12.8444 0 13.6056 0.238333 14.2833 0.715C14.9611 1.19167 15.4444 1.82 15.7333 2.6H21.3333C22.0667 2.6 22.6944 2.85458 23.2167 3.36375C23.7389 3.87292 24 4.485 24 5.2V23.4C24 24.115 23.7389 24.7271 23.2167 25.2362C22.6944 25.7454 22.0667 26 21.3333 26H2.66667ZM2.66667 23.4H21.3333V5.2H2.66667V23.4ZM5.33333 20.8H14.6667V18.2H5.33333V20.8ZM5.33333 15.6H18.6667V13H5.33333V15.6ZM5.33333 10.4H18.6667V7.8H5.33333V10.4ZM12 4.225C12.2889 4.225 12.5278 4.13292 12.7167 3.94875C12.9056 3.76458 13 3.53167 13 3.25C13 2.96833 12.9056 2.73542 12.7167 2.55125C12.5278 2.36708 12.2889 2.275 12 2.275C11.7111 2.275 11.4722 2.36708 11.2833 2.55125C11.0944 2.73542 11 2.96833 11 3.25C11 3.53167 11.0944 3.76458 11.2833 3.94875C11.4722 4.13292 11.7111 4.225 12 4.225Z"
              fill="#28303F"
            />
          </g>
        </svg>
        <span className="required-info-text">Required Information</span>
      </div>
    </div>
  );
};

export default RequiredInfo;
