import React from "react";
import { profileData } from "../../Helpers/Data/Data";
import "./Header.css";
export const Header = () => {
  let lenguage = 'Español'
  return (
    <div className="header">
      <div className="languageContainer">
        <h3 className="language"> {lenguage.toUpperCase()} </h3>
      </div>
      <div className="nameJobContainer">
        <h3 className="profileName" alt="name">{profileData.name.toUpperCase()}</h3>
        <div className="jobContainer">
          <h3 className="profileJob" alt="name">
            {profileData.job.toUpperCase()}
          </h3>
          <hr className="nameLine" />
        </div>
        <h3 className="profileSurname" alt="surname">
          {profileData.surname.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};
