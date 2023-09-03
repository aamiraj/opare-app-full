"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa"

const ScrollTopButton = () => {
  
  React.useEffect(() => {
    let mybutton = document.getElementById("scrollTopButton");
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
  });

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <button
      type="button"
      className="fixed bottom-20 right-8 z-50"
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
