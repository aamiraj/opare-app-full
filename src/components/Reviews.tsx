"use client";

import React from "react";
import { BsInfoCircle, BsFillStarFill, BsTags } from "react-icons/bs";
import StarRating from "./StarRating";

const Reviews = () => {
  const openTab = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    let tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].className = tabcontent[i].className?.replace(
        "block",
        "hidden"
      );
    }

    tablinks = document.getElementsByClassName("tab");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
    }

    if (document.getElementById(id) !== null) {
      document.getElementById(id)!.className = document
        .getElementById(id)
        ?.className.replace("hidden", "block") as string;
    }
    event.currentTarget.className += " tab-active";
  };

  return (
    <div>
      <div className="tabs">
        <button
          onClick={(event) => openTab(event, "ratings")}
          className="tab tab-lg tab-lifted tab-active"
        >
          Ratings
        </button>
        <button
          onClick={(event) => openTab(event, "reviews")}
          className="tab tab-lg tab-lifted"
        >
          Reviews
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div id="ratings" className="tabcontent block py-8">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <BsInfoCircle />
              </div>
              <div className="stat-title">Total</div>
              <div className="stat-value">15</div>
              <div className="stat-desc">Number of people rated</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <BsFillStarFill />
              </div>
              <div className="stat-title">Average Rating</div>
              <div className="stat-value">3</div>
              <div className="stat-desc">Satisfaction of this product</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <BsTags />
              </div>
              <div className="stat-title">Total sold</div>
              <div className="stat-value">17</div>
              <div className="stat-desc">An essential product</div>
            </div>
          </div>
        </div>

        <div id="reviews" className="tabcontent hidden p-8">
          <div>
            <p>
              John Doe <span>Verified</span>
            </p>
            <span>23 Aug, 2023</span>
          </div>
          <div>
            <StarRating stars={4} />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              voluptatum voluptates deleniti placeat quam tempora totam at iste
              quasi natus delectus repellendus inventore earum sapiente animi
              necessitatibus ipsum repudiandae id.
            </p>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
