import React, { useEffect, useState } from "react";
// Component
import { Tooltip, IconButton } from "@material-ui/core";
import { Loader, Message, ConfirmationDialog } from "../../../containers";
import MUIDataTable from "mui-datatables";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getUsersList } from "../../../redux/actions/users.actions";
import { UserActionTypes } from "../../../redux/types/user.types";
// Others
import { userColumns, userlistOptions } from "../../../core/mui-datatable";
import { FaTrash } from "react-icons/fa";

function UserList({ history }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [rowsToDelete, setRowsToDelete] = useState([]);

  // User Login Selector
  const { user_login } = useSelector((state) => state.users.login);

  // Users  List Selector
  const { loading, error, users } = useSelector((state) => state.users.list);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    } else {
      dispatch(getUsersList());
    }

    // Clear State
    return () => {
      dispatch({ type: UserActionTypes.LIST.RESET });
      dispatch({ type: UserActionTypes.DELETE.RESET });
    };
  }, [user_login, history, dispatch]);

  // Manage Custom Toolbar Select
  userlistOptions.customToolbarSelect = ({ data }) => {
    return (
      <React.Fragment>
        <Tooltip title="Delete Selected Users" className="mr-2">
          <IconButton
            onClick={() => {
              let items = [];
              data.forEach((element) => {
                items.push(users[element.dataIndex]);
              });
              setRowsToDelete(items);
              setShowModal(true);
            }}
          >
            <FaTrash />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  };

  // Function to Close Modal
  const closeDialog = () => {
    setShowModal(false);
  };

  // Confirm Delete After User Login Warning
  const confirmDelete = () => {
    console.log("Delete", rowsToDelete);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message message={error} type="error" />
      ) : (
        users && (
          <React.Fragment>
            <div className="container mt-4">
              <MUIDataTable
                title={`Users List (${users.length})`}
                data={users}
                columns={userColumns}
                options={userlistOptions}
              />
            </div>

            <ConfirmationDialog
              open={showModal}
              closeDialog={closeDialog}
              agreeConfirm={confirmDelete}
              type="Users"
            />
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
}

export default UserList;
