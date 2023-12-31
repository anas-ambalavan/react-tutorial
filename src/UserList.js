import { useContext, useEffect, useState } from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";

const API_URL = "https://api.github.com/users";

const UserList = () => {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("dark");

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    setUserData(data);
  };

  const app = useContext(AppContext);
  console.log("app", app.loggedInUser);

  //componentDidMount + componentDidUpdate
  useEffect(() => {
    let timer;
    // timer = setInterval(() => {
    //   console.log("From user list");
    // }, 1000);
    // console.log("Mounted");
    fetchData();
    // return () => {
    //   console.log("Component UnMounted"); // componentWillUnmount
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div>
      <h1>Users - {app.loggedInUser}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {userData?.map((user) => (
          <Link key={user.id} to={`/user/${user.login}`}>
            <UserCard userData={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
