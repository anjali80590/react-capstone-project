import React from "react";
import "./Userprofile.css";
const Userprofile = () => {
  // Access user details and selected categories from local storage
  const userData = JSON.parse(localStorage.getItem("registrationData"));
  const selectedCategories = JSON.parse(
    localStorage.getItem("selectedCategories")
  );

  return (
    <div className="user-profile">
      <div className="left-img">
        <img style={{ width: "148px" }} src="/images/image 14.png" alt="" />
      </div>
      <div className="right-user">
        <p className="text"> {userData ? userData.name : "N/A"}</p>
        <p className="text"> {userData ? userData.email : "N/A"}</p>
        <p className="username"> {userData ? userData.username : "N/A"}</p>

        <div className="category-button">
          {selectedCategories
            ? selectedCategories.map((category, index) => (
                <span key={index} className="btncategory">
                  {category}
                </span>
              ))
            : "N/A"}
        </div>
      </div>
    </div>
  );
};
export default Userprofile;
