import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Privacy from "./pages/Privacy";
import Term from "./pages/Term";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="privacy" element={<Privacy />} />
          <Route exact path="term" element={<Term />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Home1 /> */}
    </div>
  );
}

export default App;
