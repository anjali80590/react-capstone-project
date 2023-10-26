import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(null);

  useEffect(() => {
    // api
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=244532dfe9964ce1ba673d2273769426"
      )
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news data", error);
      });
  }, []);

  useEffect(() => {
    if (newsData.length > 0) {
      // Randomly select an index from the newsData array
      const randomIndex = Math.floor(Math.random() * newsData.length);
      setCurrentArticleIndex(randomIndex);
    }
  }, [newsData]);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  const truncateDescription = (description, wordLimit) => {
    if (description) {
      const words = description.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
      }
    }
    return description;
  };

  return (
    <div className="news-con">
      {newsData.length > 0 && currentArticleIndex !== null ? (
        <div>
          <div>
            {newsData[currentArticleIndex].urlToImage && (
              <img
                className="newimg"
                src={newsData[currentArticleIndex].urlToImage}
                alt={newsData[currentArticleIndex].title}
              />
            )}
            <div className="newsbg">
              <h3 className="newheading">
                {truncateTitle(newsData[currentArticleIndex].title, 50)}
              </h3>
              <p className="newsdt">
                Date and Time: {newsData[currentArticleIndex].publishedAt}
              </p>
            </div>
            <p className="aboutnews">
              About the News:{" "}
              {truncateDescription(
                newsData[currentArticleIndex].description,
                100
              )}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading news data...</p>
      )}
    </div>
  );
};

export default NewsComponent;
