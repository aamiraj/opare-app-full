"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
const ScrollTopButton = () => {
  // Get the button:
  let mybutton = document.getElementById("scrollTopButton");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton!.style.display = "block";
    } else {
      mybutton!.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <button
      type="button"
      className="btn p-4 rounded-full fixed bottom-5 right-8 z-50"
      style={{ display: "none" }}
      onClick={topFunction}
      id="scrollTopButton"
      title="Go to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTopButton;
