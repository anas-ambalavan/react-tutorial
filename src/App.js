import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import UserList from "./UserList";
import UserDetails from "./UserDetails";
import UserClass from "./UserClass";
import { useState } from "react";
import AppContext from "./AppContext";

const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <AppContext.Provider
        value={{
          loggedInUser: "User from provider",
          theme: theme,
          setTheme,
        }}
      >
        <h1>Header</h1>
        <Outlet />
        <h2>Footer</h2>
      </AppContext.Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <AppContext.Provider value={{ loggedInUser: "New User" }}>
            <UserList />
          </AppContext.Provider>
        ),
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
      {
        path: "/user/class",
        element: <UserClass />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
