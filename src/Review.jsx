import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  function handlePrevPerson() {
    if (index > 0) {
      setIndex((i) => i - 1);
    } else {
      setIndex((i) => people.length - 1);
    }
  }

  function handleNextPerson() {
    if (index < people.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setIndex((i) => 0);
    }
  }

  function handleRandomPerson() {
    const possibleIndices = [...Array(people.length).keys()].filter(
      (i) => i !== index
    );
    const randomIndex =
      possibleIndices[Math.floor(Math.random() * possibleIndices.length)];
    setIndex(randomIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={handlePrevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={handleNextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={handleRandomPerson} className="random-btn">
        Randomizer
      </button>
    </article>
  );
};

export default Review;
