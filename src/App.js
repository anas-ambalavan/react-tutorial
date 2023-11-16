import { RouterProvider, createBrowserRouter } from "react-router-dom";

import UserList from "./UserList";
import UserDetails from "./UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
  },
  {
    path: "/user/settings",
    element: (
      <div>
        <h1>Setting</h1>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
