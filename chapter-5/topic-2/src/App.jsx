import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";
import DetailMovie from "./pages/DetailMovie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./wrapper/Protected";
import NoAccessToken from "./wrapper/NoAccessToken";
import Profile from "./pages/Profile";

import { GoogleOAuthProvider } from "@react-oauth/google";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route element={<Protected />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/movie/:movieId" element={<DetailMovie />} />
      </Route>

      {/* Authentication */}
      <Route
        path="/login"
        element={
          <NoAccessToken>
            <Login />
          </NoAccessToken>
        }
      />
      <Route
        path="/register"
        element={
          <NoAccessToken>
            <Register />
          </NoAccessToken>
        }
      />
    </Route>
  )
);

const App = () => {
  const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={routes} />
    </GoogleOAuthProvider>
  );
};

export default App;
