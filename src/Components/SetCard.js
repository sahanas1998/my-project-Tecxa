import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import Stack from '@mui/material/Stack';

const CardItem = ({ title, description, color , action , size }) => {
  return (
        <Card sx={{ minWidth: 500, minHeight: 170,  borderRadius: 10 , backgroundColor: color, color: "#f3e5f5" , marginTop:15, padding:3}}>
      <Stack >
          <Box sx={{height:150}}>         
            <CardContent>
                <Typography variant="h5">
                  {title}
                </Typography>
                <br/>
                <Typography variant="p" class={size} >
                  {description}
                </Typography>
              </CardContent>
          </Box>
          <Box sx={{height:50}}>
              <CardActions >
                {action}
              </CardActions>
          </Box>
      </Stack>
    
    </Card>

  );
};

const SetCard = () => {
  return (
    <div style={{ overflowY: 'scroll', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
            <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="flex flex-row text-left space-x-16 ml-8" >
        <CardItem title="Set Delivery" description="Send orders quickly and easily by setting delivery services now" color="#9c27b0" size="text-xl font-thin" action={ <Button endIcon={<SendIcon/>} sx={{ backgroundColor: '#f3e5f5', borderRadius: 8, color: "#9c27b0", padding: 1 }}>
  Fill in this detail
       </Button>} />
        <CardItem title="Set Bank Account" description="Cash but your earning earsily by selling your bank account information" color="#512da8" size="text-ym font-thin" action={<div class='flex flex-row  gap-2 pl-4'>
       <CheckCircleSharpIcon/>
       <h4>Completed</h4>
       </div>} />
        <CardItem title="Update your Profile" description="The faster you sell, the faster you'll get the thing. can update your profile" color="#512da8"  size="text-ym font-thin" action={<div class='flex flex-row  gap-2 pl-4'>
       <CheckCircleSharpIcon/>
       <h4>Completed</h4>
       </div>} />
      </div>
    </div>
  );
};

export default SetCard;
