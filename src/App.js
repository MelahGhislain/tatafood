import Home from "./pages/Home";
import HomeFr from "./pages/HomeFr";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Privacy from "./pages/Privacy";
import Term from "./pages/Term";
import NavBar from "./components/NavBar";
import Credit from "./pages/Credit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fr" element={<HomeFr />} />
          <Route exact path="privacy" element={<Privacy />} />
          <Route exact path="term" element={<Term />} />
          <Route exact path="credit" element={<Credit />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Home1 /> */}
    </div>
  );
}

export default App;
