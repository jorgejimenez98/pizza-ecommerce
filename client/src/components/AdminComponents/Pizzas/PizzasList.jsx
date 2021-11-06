import React, { useEffect, useState } from "react";
import { pizzacolumns, pizzalistOptions } from "../../../core/mui-datatable";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getPizzasList,
  deletePizzas,
} from "../../../redux/actions/pizzas.actions";
import { setSnackbar } from "../../../redux/actions/snackbar.actions";
import { PizzaActionTypes } from "../../../redux/types/pizzas.types";
// Components
import { Loader, Message, ConfirmationDialog } from "../../../containers";
import MUIDataTable from "mui-datatables";
import { FaTrash } from "react-icons/fa";
import { IconButton, Tooltip } from "@mui/material";

function PizzasList({ history }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [rowsToDelete, setRowsToDelete] = useState([]);

  // User Login Selector
  const { user_login } = useSelector((state) => state.users.login);

  // Pizza Delete Selector
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.pizzas.delete);

  // Pizza List Selector
  const {
    loading: loadingList,
    error: errorList,
    pizzas,
  } = useSelector((state) => state.pizzas.list);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    } else {
      dispatch(getPizzasList());

      if (successDelete) {
        const message = "Pizzas Delete Successfully";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: PizzaActionTypes.DELETE.RESET });
      }
    }

    // On Destroy
    return () => {
      dispatch({ type: PizzaActionTypes.DELETE.RESET });
      dispatch({ type: PizzaActionTypes.PIZZAS_LIST.RESET });
    };
  }, [dispatch, user_login, history, successDelete]);

  // Manage Custom Toolbar Select
  pizzalistOptions.customToolbarSelect = ({ data }) => {
    return (
      <React.Fragment>
        <Tooltip title="Delete Selected Pizzas" className="mr-2">
          <IconButton
            onClick={() => {
              let items = [];
              data.forEach((element) => {
                items.push(pizzas[element.dataIndex]);
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
    dispatch(deletePizzas({ pizzas: rowsToDelete }));
    setShowModal(false);
  };

  return (
    <div className="container text-center">
      {loadingList ? (
        <Loader />
      ) : errorList ? (
        <Message message={errorList} type="error" />
      ) : (
        pizzas && (
          <React.Fragment>
            <div className="m-5">
              {/* DELETE Sections */}
              {loadingDelete && <Loader />}
              {errorDelete && <Message type={"error"} message={errorDelete} />}

              {/* Pizzas List */}
              <MUIDataTable
                title={`Pizza List (${pizzas.length})`}
                data={pizzas}
                columns={pizzacolumns}
                options={pizzalistOptions}
              />
            </div>

            <ConfirmationDialog
              open={showModal}
              closeDialog={closeDialog}
              agreeConfirm={confirmDelete}
              type="Pizzas"
            />
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default PizzasList;
