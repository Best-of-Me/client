import React from "react";
const Profile = (props) => {
  const user=props.currentUser
  return (
  <div>
    {/* <img src={user.image} alt={user.username}/> */}
    <p>{user.username}</p>
  </div>
  );
};
export default Profile;
