import React, { useState } from "react";
import "./SelectCategory.css";
const categories = [
  "Action",
  "Drama",
  "Romance",
  "Thriller",
  "Western",
  "Horror",
  "Fantasy",
  "Music",
  "Fiction",
];

const SelectCategoryPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState("");

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }

    // Clear the error when three or more categories are selected
    if (selectedCategories.length >= 2) {
      setError("");
    }
  };
  const handleRemoveCategory = (category) => {
    setSelectedCategories(
      selectedCategories.filter((item) => item !== category)
    );
  };
  const handleNextClick = () => {
    if (selectedCategories.length < 3) {
      setError(
        <div>
          <img
            style={{
              width: "26px",
              height: "18px",
              borderRadius: "none",
              marginTop: "4px",
            }}
            src="/images/vector.png"
          />
          <span style={{ marginBottom: "81px" }}>
            {" "}
            Minimum 3 category required{" "}
          </span>
        </div>
      );
    } else {
      localStorage.setItem(
        "selectedCategories",
        JSON.stringify(selectedCategories)
      );
      // Show a pop-up notification
      window.alert("Data stored in local storage.");

      // Navigate to the next page
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="left-container">
          <h1 className="super">Super app</h1>
          <h1 className="category">Choose your enterntainment category</h1>
          <div>
            <ul>
              {selectedCategories.map((category, index) => (
                <li key={index}>
                  {category}{" "}
                  <button
                    className="cross"
                    onClick={() => handleRemoveCategory(category)}
                  >
                    X{" "}
                  </button>
                </li>
              ))}
            </ul>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>

        {/* right container */}

        <div className="right-container">
          {categories.map((category, index) => (
            <div className="images" key={index}>
              <img
                style={{
                  border: selectedCategories.includes(category)
                    ? "5px solid green"
                    : "2px solid transparent",
                }}
                src={`/images/${category}.png`} // Replace with actual path to images
                alt={category}
                onClick={() => handleCategorySelect(category)}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={handleNextClick}>
        Next Page
      </button>
    </div>
  );
};

export default SelectCategoryPage;
