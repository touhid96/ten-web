import React, { useEffect, useState } from "react";
import FacebookPost from "./FacebookPost";
const App = () => {
  const [posts, setPosts] = useState([]);
  const postmap = posts.user;

  console.log();
  useEffect(() => {
    fetch("ten.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {postmap?.map((post, index) => (
        <FacebookPost key={index} post={post}></FacebookPost>
      ))}
    </div>
  );
};

export default App;
