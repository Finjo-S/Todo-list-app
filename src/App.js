import React from "react"; 
import "./App.css";
import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";

const App = () => {


  

  return (
    <div className="container py-5">
      <Header />
      <TodoWrapper />
      
    </div>
  );
};

export default App;
