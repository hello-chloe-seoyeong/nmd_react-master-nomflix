import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tv" element={<Tv />}>
          {/* <Tv /> */}
        </Route>
        <Route path="/search" element={<Search />}>
          {/* <Search /> */}
        </Route>
        <Route path="/" element={<Home />}>
          <Route path="/movies/:movieId" element={<Home />} />
          {/* <Home /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
