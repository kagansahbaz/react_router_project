import React from "react";
import { Link } from "react-router-dom";

function News() {
  return (
    <>
      <h3>Daily News</h3>
      <ul className="news">
        <li>
          <Link to="1">
            <b>NEWS#1</b> - OpenAI
          </Link>
        </li>
        <li>
          <Link to="2">
            <b>NEWS#2</b> - Russia - Ukraine War
          </Link>
        </li>
        <li>
          <Link to="3">
            <b>NEWS#3</b> - Barbie vs Oppenheimer
          </Link>
        </li>
      </ul>
    </>
  );
}

export default News;
