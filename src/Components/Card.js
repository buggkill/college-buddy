import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({job}) {

    console.log("the job is ====>>>>", job)

    // document.getElementById('description').innerHTML = job.description!=null ? job.description : ""

  return (
    <Card sx={{ minWidth: 275 }} style={{padding:"3%", marginTop:"3%"}}>
        <Avatar src={job.company_logo_url} />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {job.company_name}
        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
          {job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.job_type}
          
        </Typography>
        <Typography variant="body2" >
          {job.salary=="" ? "salary : not mentioned" : `salary : ${job.salary}`}
          {/* <br /> */}
      </Typography>
      </CardContent>
        <Button size="large"><a target="_blank" href={job.url}>APPLY</a></Button>

    </Card>
  );
}
