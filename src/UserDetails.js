import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const API_URL = "https://api.github.com/users/";

const UserDetails = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(API_URL + id);
    const data = await res.json();

    setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading....</div>;
  }

  const { name, bio, login } = userData;

  return (
    <div>
      <h1>UserDetails - {id}</h1>
      <p>{name}</p>
      <p>{bio}</p>
      <p>{login}</p>
    </div>
  );
};

export default UserDetails;
