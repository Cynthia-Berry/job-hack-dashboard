import {BrowserRouter as Router, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Login from "./pages/authentication/login/Login";
import Register from "./pages/authentication/register/Register";

import Home from "./pages/dashboard/home/Home";
import Profile from "./pages/dashboard/profile/Profile";

import Error404 from "./pages/misc/Error/error404";
import Error401 from "./pages/misc/Error/Error401";


const isAuthenticated = false;

const AuthenticatedRoutes = () => {
  if(isAuthenticated) return <Outlet/>
  else return <Navigate to="/auth/login" replace/>;
};


const App = () => {
  return (
    <Router>
      <ToastContainer position="top-right" theme="light" autoClose={7000} style={{zIndex: '99999999999'}}
                      hideProgressBar={false} newestOnTop={false} rtl={false} closeOnClick={false}
                      pauseOnFocusLoss draggable pauseOnHover/>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="*" element={<Error401/>}/>
        </Route>

        <Route element={<AuthenticatedRoutes/>}>
          {['', 'home', 'dashboard'].map(path => <Route path={path} key={path} element={<Home/>}/>)}
          <Route path="profile" element={<Profile/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
