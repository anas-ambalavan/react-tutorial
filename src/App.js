import { RouterProvider, createBrowserRouter } from "react-router-dom";

import UserList from "./UserList";
import UserDetails from "./UserDetails";
import UserClass from "./UserClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "user/:id",
    element: <UserDetails />,
  },
  {
    path: "user/class",
    element: <UserClass />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

{
  /* <Route path="/" element={<Root />}>
    <Route path="dash" element={<Contact />} >
        <Route path="user" element={<Contact />} />
    </Route>
</Route>

/dash/user */
}
