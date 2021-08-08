import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { deepPurple, green, grey } from "@material-ui/core/colors";
import List from "../student/List";
import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles({
  headingColor: {
    backgroundColor: grey[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: grey[400],
    color: "white",
  },
});

const Home = () => {
  const classes = useStyles();
  const [users, setStudent] = useState({
    name: "",
    username: "",
    // // stuname: "",
    // title: "",
    // url: "",
    // thumbnailUrl: "",
    // // email: "",
    // image: "",
  });
  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setStudent({
      ...users,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`https://jsonplaceholder.typicode.com/users`, users);
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return <Home />;
  }
  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
        <Typography variant="h2">BOOTCAMP G2 Academy</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        {/* <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Tambah Data</Typography>
          </Box> */}
        {/* <form noValidate> */}
        {/* <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box> */}
        {/* </form> */}
        {/* </Grid> */}

        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Tambah Data</Typography>
          </Box>
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              onChange={(e) => onTextFieldChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="username"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Email Address"
              onChange={(e) => onTextFieldChange(e)}
            />
          </Grid>
          <Box m={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={(e) => onFormSubmit(e)}
            >
              Add
            </Button>
          </Box>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
