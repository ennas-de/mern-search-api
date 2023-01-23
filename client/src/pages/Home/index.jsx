import React from "react";

import Hero from "../../components/Hero";
import TodoList from "../../components/TodoList";
import Pending from "../../components/Pending";
import Completed from "../../components/Completed";

const Home = () => {
  return (
    <div className="justify-center">
      <Hero />
      <TodoList />
    </div>
  );
};

export default Home;
