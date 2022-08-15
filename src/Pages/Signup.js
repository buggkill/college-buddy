import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@mui/material";

import Api from "../Helpers/Api";
import { useState } from "react";

const Signup = () => {

  const [role, setRole] = useState(0)

  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Name is required"),
        email: Yup.string().email().max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      console.log("submitted", formik.values);

      console.log("Add User data");
      let loginDetails = {
        name:formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        role:role
      };

      console.log("login details are", loginDetails);
      //   console.log(data);

      Api.post("/signup", loginDetails).then((res, err) => {
        console.log(res);
        console.log(err);

        window.localStorage.setItem('UserRef',res.id)
        window.localStorage.setItem('Role',role)
        window.location.href = '/dash'
      });

      console.log("submitted");
    },
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ my: 3 }}>
            <Typography
              color="textPrimary"
              variant="h2"
              sx={{
                textAlign: "center",
              }}
            >
              COLLEGE BUDDY
            </Typography>
          </Box>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h5"
                sx={{
                  textAlign: "center",
                }}
              >
                Sign Up
              </Typography>
            </Box>


            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Name"
              margin="normal"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.name}
              variant="outlined"
            />

            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.email}
              variant="outlined"
            />


                
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />

<RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e)=> setRole(e.target.value)}
        defaultValue={1}
      >
        <FormControlLabel value={1} control={<Radio />} label="Teacher" />
        <FormControlLabel value={2} control={<Radio />} label="Student" />
      </RadioGroup  >

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                SIGN UP
              </Button>
            </Box>

            <Typography onClick={()=> window.location.href = '/login'}>Already have an account? Login</Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
