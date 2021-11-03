import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function AdminPanel({ history }) {
  const { user_login } = useSelector((state) => state.users.login);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    }
  }, [user_login, history]);

  return <div>Admin Panel</div>;
}

export default AdminPanel;
