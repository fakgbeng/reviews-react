import React, { useEffect, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let DummyPeople = people;
  const [person, setPerson] = useState({});
  const [idNo, setIdNo] = useState(1);
  useEffect(() => {
    const [rev] = DummyPeople.filter((rev) => rev.id === idNo);
    setPerson(rev);
  }, [idNo]);
  const nextHandler = () => {
    if (idNo < DummyPeople.length) {
      return setIdNo((prevState) => {
        return (prevState = ++prevState);
      });
    } else {
      return setIdNo(1);
    }
  };
  const prevHandler = () => {
    if (idNo > 1) {
      return setIdNo((prevState) => {
        return (prevState = --prevState);
      });
    } else {
      return setIdNo(DummyPeople.length);
    }
  };
  const randomHandler = () => {
    setIdNo(Math.trunc(Math.random() * 4) + 1);
  };

  return (
    <div className="container">
      <div className="review">
        <div className="img-container">
          <div className="quote-icon">
            <FaQuoteRight />
          </div>

          <img src={person.image} className="person-img" alt={person.name} />
        </div>
        <div className="author">{person.name}</div>
        <div className="job">{person.job}</div>
        <div className="info">{person.text}</div>
        <div className="btns">
          <button className="prev-btn" onClick={prevHandler}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextHandler}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomHandler}>
          Suprise me
        </button>
      </div>
    </div>
  );
};

export default Review;
