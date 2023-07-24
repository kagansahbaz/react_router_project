import React from "react";
import { useParams, Link } from "react-router-dom";

function Content() {
  const data = [
    {
      id: 1,
      title: "OpenAi",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ut fuga natus quaerat, aspernatur esse quas dolore maxime explicabo quos?",
    },
    {
      id: 2,
      title: "Russia - Ukraine War",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ut fuga natus quaerat, aspernatur esse quas dolore maxime explicabo quos?",
    },
    {
      id: 3,
      title: "Barbie vs Oppenheimer",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ut fuga natus quaerat, aspernatur esse quas dolore maxime explicabo quos?",
    },
  ];
  const params = useParams();

  return (
    <>
      <h2>News#{params.newsId}</h2>
      <h3>{data[params.newsId - 1].title}</h3>
      <p>{data[params.newsId - 1].text}</p>
    </>
  );
}

export default Content;
