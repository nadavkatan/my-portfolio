import React, { useEffect } from "react";
import DOMPurify from "dompurify";

import "./styles/styles.css";

const BookPage = ({ pageNumber, content, currentPage }) => {
  const { title, content: pageContent, link, img } = content;
  const isCurrentPage = currentPage === pageNumber;
  const pageClass = isCurrentPage ? "page current" : "page";

  const purifyConfig = {
    ADD_ATTR: ["target", "el"],
    ADD_TAGS: ["a"],
  };
  const sanitizedContent = DOMPurify.sanitize(pageContent, purifyConfig);

  return (
    <div
      className={pageClass}
      style={{
        transform: isCurrentPage
          ? "rotateY(0deg)"
          : pageNumber < currentPage
          ? "rotateY(-180deg)"
          : "rotateY(180deg)",
      }}
    >
      <div className="background-overlay" />

      <div
        className="content"
        style={{
          background: img ? `transparent url(${img}) no-repeat fixed ` : null,
          backgroundSize: "120%",
          backgroundPositionY: "190px",
          backgroundPositionX: "-13px",
        }}
      >
        <h1>
          <i>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          </i>
        </h1>
        {img ? (
          <div />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        )}
      </div>
    </div>
  );
};

export default BookPage;
