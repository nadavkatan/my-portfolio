import React, { useRef, useState } from "react";
import BookPage from "../bookPage/BookPage";
import "./styles/styles.css";

const Book = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = pages.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const flipPage = () => {
    if (touchStartX.current - touchEndX.current > 7) {
      nextPage();
    }

    if (touchEndX.current - touchStartX.current > 7) {
      prevPage();
    }
  };
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    touchEndX.current = e.clientX;
  };

  const showPage = (page) => {
    return pages.map((pageContent, index) => (
      <BookPage
        key={index}
        pageNumber={index + 1}
        content={pageContent}
        currentPage={currentPage}
      />
    ));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      className="book"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={flipPage}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={flipPage}
    >
      {showPage(currentPage)}
    </div>
  );
};

export default Book;
