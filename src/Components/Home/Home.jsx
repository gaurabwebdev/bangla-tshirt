import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tshirtdata = useLoaderData();
  console.log(tshirtdata);
  return (
    <div>
      <p>Home</p>
    </div>
  );
};

export default Home;
