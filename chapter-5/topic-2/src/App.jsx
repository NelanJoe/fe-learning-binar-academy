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

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/search" element={<SearchMovies />} />
      <Route path="/movie/:movieId" element={<DetailMovie />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
