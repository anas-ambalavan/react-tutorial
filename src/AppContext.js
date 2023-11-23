import { createContext } from "react";

const initiaLState = {
  loggedInUser: " Default User",
  theme: "light",
};

const AppContext = createContext(initiaLState);

export default AppContext;
