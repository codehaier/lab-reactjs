import React from "react";
import "./App.scss";
import PostFeature from "./features/Post";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="app">
      {/* <TodoFeature /> */}

      <PostFeature />
    </div>
  );
}

export default App;
