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
} from "@mui/material";

import Api from "../Helpers/Api";
import { useEffect, useState } from "react";

const JoinClassroom = () => {

    const [userRef, setUserRef] = useState("")


  useEffect(()=>{
    var UserRef = typeof window !== 'undefined' ?  localStorage.getItem("UserRef") : null

    setUserRef(UserRef)

  },[])

  const formik = useFormik({
    initialValues: {
      email: "",
    //   password: "",
    },
    validationSchema: Yup.object({
        email: Yup.string().max(255).required("User Name is required"),
    //   password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      console.log("submitted", formik.values);

      console.log("Add User data");
      let loginDetails = {
        classroom_Ref: formik.values.email,
        // password: formik.values.password,
        loggedin_user_Ref: userRef
      };

      console.log("login details are", loginDetails);
      //   console.log(data);

      Api.post("/joinclass", loginDetails).then((res, err) => {
        console.log(res);
        console.log(err);

        // window.localStorage.setItem('UserRef',res.data.user._id)
        // window.localStorage.setItem('Role',res.data.user.role)
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
                Join Classroom
              </Typography>
            </Box>

            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Classroom Code"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.email}
              variant="outlined"
            />
            {/* <TextField
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
            /> */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                JOIN CLASS
              </Button>
            </Box>

                {/* <Typography onClick={()=> window.location.href = '/signup'}>Dont have an account? Sign Up</Typography> */}

          </form>
        </Container>
      </Box>
    </>
  );
};

export default JoinClassroom;
