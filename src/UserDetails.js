import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";

const API_URL = "https://api.github.com/users/";

const UserDetails = (props) => {
  console.log(props);
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(API_URL + id);
    const data = await res.json();

    setUserData(data);
  };

  const app = useContext(AppContext);
  console.log("app", app.loggedInUser);

  useEffect(() => {
    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading....</div>;
  }

  const { name, bio, login } = userData;

  return (
    <div>
      <h1>
        UserDetails - {id} - {app.loggedInUser}
      </h1>
      <p>{name}</p>
      <p>{bio}</p>
      <p>{login}</p>
      <div style={{ margin: 10 }}>
        <Link to="/">Home</Link>
      </div>
      <button
        onClick={() => app.setTheme(app.theme === "light" ? "dark" : "light")}
      >
        Change theme
      </button>
    </div>
  );
};

export default UserDetails;
