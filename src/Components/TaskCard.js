import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Calendar from "../Components/Calendar";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ClassCard({item}) {

    console.log("the item is ====>>>>", item)

    // document.getElementById('description').innerHTML = item.description!=null ? item.description : ""

  return (
    <Card sx={{ minWidth: 275 }} style={{padding:"3%", marginTop:"3%"}} >
        {/* <Avatar src={item.company_logo_url} /> */}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {item.branch}
        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
          {item.taskTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`Description : ${item.taskDescription}`}
          
        </Typography>
        <Typography variant="body2" onClick={()=> window.location.href = item.avatar} >
          Click Here to View File
        </Typography>
        
      {/* <Typography variant="body2" >
          {`Classroom Code : ${item._id}`}
      </Typography> */}
      </CardContent>
        {/* <Button size="large"><a target="_blank" href={item.url}>APPLY</a></Button> */}
        <Calendar title={item.taskTitle} description={item.taskDescription} date={item.createdAt} />

    </Card>
  );
}
