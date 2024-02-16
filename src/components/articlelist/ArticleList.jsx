import React from "react";

export default function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
}
