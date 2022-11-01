import React from "react";
import { profileData } from "../../Helpers/Data/Data";
import "./Header.css"; 
export const Header = () => {
  return (
    <>
      <h3 className="language"> Español </h3>
      <h3 className="profileName" alt="name"> {profileData.name} </h3>
      <h3 className="profileSurname" alt="surname"> {profileData.surname} </h3>
    </>
  );
};
