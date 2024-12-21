import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
