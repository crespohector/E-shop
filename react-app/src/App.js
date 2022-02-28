import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Splash from "./components/Splash";
import Cart from "./components/Cart";
import { authenticate } from "./store/session";
import ProductPage from "./components/ProductPage";


function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // The cb in authenticate already handles the async tasks. If you are not doing nothing with the
    //return value then there's maybe no need to set it to be async.
    // (async () => {
    //   await dispatch(authenticate());
    //   setLoaded(true);
    // })();

    dispatch(authenticate());
    setLoaded(true);

  }, []);
  //Because we want to have useEffect paint first, we can force it to wait by using
  //a state variable and set it to false first. If its false that means it hasn't loaded
  //the useeffect hook yet. Once, the useEffect hook rerenders, then it will load the content.
  //However, we may solve this using layout hook?
  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Splash />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <Route path="/categories/:category" exact={true}>
          <h1>Category page</h1>
        </Route>
        <Route path="/products/:productId" exact={true}>
          <ProductPage/>
        </Route>
        <Route path="/cart" exact={true}>
          < Cart/>
        </Route>
        <Route path="/results" exact={true}>
          <h1>this is results page</h1>
        </Route>
      </Switch >
      {/* footer */}
    </BrowserRouter >
  );
}

export default App;
