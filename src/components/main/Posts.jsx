import React from "react";

import Contents from "./Contents";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <ul className="posts">
      {posts
        .slice(0)
        .reverse()
        .map((post) => (
          <li key={post.id}>
            <Contents
              id={post.id}
              thumbnail={post.thumbnail}
              profileImg={post.profileImg}
              title={post.title}
              category={post.category}
              userName={post.userName}
              created={post.created}
            >
              {post.contents[0].text}
            </Contents>
          </li>
        ))}
    </ul>
  );
}
