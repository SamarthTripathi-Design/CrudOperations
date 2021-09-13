import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const [state, setstate] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const history = useHistory();

  const { name, email, contact, address } = state;

  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
      >
        Go Back
      </Button>
      <h2> ADD USER </h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Name" value={name} type="text" />
        <br />
        <TextField
          id="standard-basic"
          label="Standard"
          value={email}
          type="email"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Standard"
          value={contact}
          type="number"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Standard"
          value={address}
          type="text"
        />
        <br />

        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
