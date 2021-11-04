import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersList } from "../../../redux/actions/users.actions";
import { Loader, Message } from "../../../containers";

function UserList({ history }) {
  const dispatch = useDispatch();

  // User Login Selector
  const { user_login } = useSelector((state) => state.users.login);

  // Users  List Selector
  const { loading, error, users } = useSelector((state) => state.users.list);

  console.log("AAAA", users);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    } else {
      dispatch(getUsersList());
    }
  }, [user_login, history, dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message message={error} type="error" />
      ) : (
        users && (
          <React.Fragment>
            <div>Todo is OK</div>
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
}

export default UserList;
