import Home from "./pages/Home";
import HomeFr from "./pages/fr/HomeFr";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Privacy from "./pages/Privacy";
import Term from "./pages/Term";
import NavBar from "./components/NavBar";
import Credit from "./pages/Credit";
import CreditFr from "./pages/fr/CreditFr";
import TermFr from "./pages/fr/TermFr";
import PolicyFr from "./pages/fr/PolicyFr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fr" element={<HomeFr />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/term" element={<Term />} />
          <Route exact path="/credit" element={<Credit />} />
          <Route exact path="/fr/privacy" element={<PolicyFr />} />
          <Route exact path="/fr/term" element={<TermFr />} />
          <Route exact path="/fr/credit" element={<CreditFr />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Home1 /> */}
    </div>
  );
}

export default App;
