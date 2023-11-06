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
import { Toaster } from "sonner";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* Guest User */}
      <Route element={<Protected />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/movie/:movieId" element={<DetailMovie />} />
      </Route>

      {/* Authentication */}
      <Route element={<NoAccessToken />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Route>
  )
);

const App = () => {
  const { VITE_GOOGLE_OAUTH_CLIENT_ID: clientId } = import.meta.env;

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <Toaster position="top-right" expand={false} richColors />
        <RouterProvider router={routes} />
      </GoogleOAuthProvider>
    </Provider>
  );
};

export default App;
