import { Container, Grid, Paper, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicCard from "../Components/Card";
import Api from "axios";
import { styled } from "@mui/material/styles";
import Calendar from "../Components/Calendar";

const Jobs = () => {
  const [jobList, setJobList] = useState([]);

  //   const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   }));

  const [phoneImage, setPhoneImage] = useState(1);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // useEffect(() => {

  //   if (screenSize >= 800) {
  //     setPhoneImage(true);
  //   } else {
  //     setPhoneImage(false);
  //   }

  // },[]);

  // useEffect(() => {

  // },[]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    try {
      Api.get("https://remotive.com/api/remote-jobs?limit=51").then(
        (res, err) => {
          console.log(res.data.jobs);

          setJobList(res.data.jobs);
        }
      );
    } catch {}

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize >= 1000) {
      setPhoneImage(4);
    } else if (screenSize >= 600) {
      setPhoneImage(6);
    } else {
      setPhoneImage(12);
    }
  }, [screenSize]);

  return (
    <>
    {/* <Container> */}
    <h1 style={{marginLeft:"3%"}}>Jobs</h1>
    {/* </Container> */}
    <div style={{marginRight:"3%", marginLeft:"3%"}}>
      <Grid container spacing={2}>
        {jobList.length === 0 && (
          <>
            <Grid item xs={phoneImage}>
              <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
          </>
        )}

        {jobList.map((job) => (
          <Grid item xs={phoneImage} key={job.id}>
            <Paper>
            <BasicCard job={job} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      </div>
      {/* <Calendar /> */}
    </>
  );
};

export default Jobs;
