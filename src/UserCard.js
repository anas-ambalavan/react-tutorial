import React from "react";

const UserFunctional = (props) => {
  const { userData, theme, setTheme } = props;
  const { login, avatar_url } = userData;

  return (
    <div
      style={{
        border: "1px solid grey",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: "300px",
      }}
    >
      <img width={150} height={150} src={avatar_url} alt="profile" />
      <p>{login}</p>
    </div>
  );
};

export default UserFunctional;
