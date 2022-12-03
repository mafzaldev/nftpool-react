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
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUser, refreshUser } from "./store/user/userSlice";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(fetchUser({uid: user.uid}))
        console.log(user)
      } 
    });
  }, [])
  console.log(user)
  return (
    <Router>
      {user ? (<Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/marketplace" element={<Marketplace />}></Route>
        <Route path="/nft/:nftId" element={<div>Hello</div>}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>)
      :
      (<Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="*" element={<Signin />}></Route>
      </Routes>)}
    </Router>
  );
}

export default App;
