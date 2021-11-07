import React from "react";

function UserColumn({ user }) {
  return (
    <div>
      <div>{user.name}</div>
      <div>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
    </div>
  );
}

export default UserColumn;
