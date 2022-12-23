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
import NFTDetails from "./pages/NFTDetails/NFTDetails";
import "./App.css";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/user/userSlice";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Auction from "./pages/Auction/auction";
import Required_form from "./components/form/Required_form";
import CreateNFT from "./pages/CreateNFT/CreateNFT";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactLoading from "react-loading";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(fetchUser({ uid: user.uid, photoURL: user.photoURL }));
      }
    });
  }, [auth]);
  if (loading) {
    return <div style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ReactLoading type="spin" color="#FFFFFF" height={'25%'} width={'25%'} />
    </div>
  }
  return (
    <>
      <Router>
        {user ? (
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/form" element={<Required_form />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/marketplace" element={<Marketplace />}></Route>
            <Route path="/createNft" element={<CreateNFT />}></Route>
            <Route path="/nft/:nftId" element={<NFTDetails />}></Route>
            <Route path="/auction" element={<Auction />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/auction" element={<Auction />}></Route>
            <Route path="/marketplace" element={<Marketplace />}></Route>
            <Route path="*" element={<Signin />}></Route>
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
