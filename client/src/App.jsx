import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
// import CreateTodoForm from "./components/CreateTodoForm";

import "./App.css";

// to keep
// rounded-tl-lg rounded-bl-lg rounded-lg

function App() {
  return (
    <div className="App w-full h-screen bg-violet-500 flex overflow-x-auto custom-scrollbar">
      <Router>
        {/* <aside className="w-64 p-4"> */}
        <Nav />
        {/* </aside> */}
        <main className="flex-1 px-2 mt-3 mb-3 mr-3 bg-violet-400 rounded-tr-lg rounded-br-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo/*" element={<Todo />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
