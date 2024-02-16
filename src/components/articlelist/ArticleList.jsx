import { nanoid } from "nanoid";
import React from "react";

export default function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((item) => (
        <li key={nanoid()}>{item.title}</li>
      ))}
    </ul>
  );
}
