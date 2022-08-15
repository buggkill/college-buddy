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
  FormControlLabel,
} from "@mui/material";

import Api from "../Helpers/Api";
import { useState } from "react";

const AddClassroom = () => {
//   const [role, setRole] = useState(1);

var UserRef = typeof window !== 'undefined' ?  localStorage.getItem("UserRef") : null

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
      sem:"",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Name is required"),
      email: Yup.string().max(255).required("Branch is required"),
    //   branch: Yup.string().max(255).required("Email is required"),
      description: Yup.string().max(255).required("Description is required"),
      sem: Yup.string().max(10).required("Semester is required"),
      //   password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      console.log("submitted", formik.values);

      console.log("Add User data");
      let loginDetails = {
        userRef:UserRef,
        classroomname: formik.values.name,
        branch: formik.values.email,
        description: formik.values.description,
        sem: formik.values.sem,
      };

      console.log("login details are", loginDetails);
      //   console.log(data);

      Api.post("/createclassroom", loginDetails).then((res, err) => {
        console.log(res);
        console.log(err);

        window.location.href = '/'
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
                Classroom
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
              label="Branch"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.email}
              variant="outlined"
            />

            <TextField
              error={Boolean(formik.touched.description && formik.errors.description)}
              fullWidth
              helperText={formik.touched.description && formik.errors.description}
              label="Description"
              margin="normal"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.description}
              variant="outlined"
            />

            <TextField
              error={Boolean(formik.touched.sem && formik.errors.sem)}
              fullWidth
              helperText={formik.touched.sem && formik.errors.sem}
              label="Sem"
              margin="normal"
              name="sem"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.sem}
              variant="outlined"
            />

            {/* <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => setRole(e.target.value)}
              defaultValue={1}
            >
              <FormControlLabel value={1} control={<Radio />} label="Teacher" />
              <FormControlLabel value={2} control={<Radio />} label="Student" />
            </RadioGroup> */}

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                ADD CLASSROOM
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default AddClassroom;
