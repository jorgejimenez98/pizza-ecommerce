import React, { useEffect, useState } from "react";
// Component
import { Tooltip, IconButton } from "@material-ui/core";
import { Loader, Message, ConfirmationDialog } from "../../../containers";
import MUIDataTable from "mui-datatables";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersList,
  deleteUsers,
} from "../../../redux/actions/users.actions";
import { setSnackbar } from "../../../redux/actions/snackbar.actions";
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

  // Users Delete Selector
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.users.delete);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    } else {
      dispatch(getUsersList());

      if (successDelete) {
        const message = "Users Deleted Successfully";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: UserActionTypes.DELETE.RESET });
      }
    }

    // Clear State
    return () => {
      dispatch({ type: UserActionTypes.LIST.RESET });
      dispatch({ type: UserActionTypes.DELETE.RESET });
    };
  }, [user_login, history, dispatch, successDelete]);

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
    dispatch(deleteUsers({ users: rowsToDelete }));
    setShowModal(false);
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
              {/* User Delete handlers */}
              {loadingDelete && <Loader />}
              {errorDelete && <Message type="error" message={errorDelete} />}

              {/* Users List */}
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
