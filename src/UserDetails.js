import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = (props) => {
  const { id } = useParams();
  //   const { userData } = props;
  //   const { name, login, avatar_url, location, followers, company } = userData;
  return (
    <div>
      {/* <h1>
        {login}-{name}
      </h1>
      <img width={150} height={150} src={avatar_url} alt="profile" />
      <p>{location}</p>
      <p>{company}</p>
      <p>{followers}</p> */}
      <h1>{id}</h1>
    </div>
  );
};

export default UserDetails;
