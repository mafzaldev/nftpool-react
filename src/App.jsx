import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Marketplace from "./pages/Marketplace/Marketplace";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/marketplace" element={<Marketplace />}></Route>
          <Route path="/nft/:nftId" element={<div>Hello</div>}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
