import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

const API_URL = "https://api.github.com/users";

const UserList = () => {
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Hello");

  return (
    <div>
      <h1>UserList</h1>
      {userData?.map((user) => (
        <Link key={user.id} to={`/user/${user.id}`}>
          <UserCard userData={user} />
        </Link>
      ))}
    </div>
  );
};

export default UserList;
