import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Stack, fontSize } from '@mui/system';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RecommendIcon from '@mui/icons-material/Recommend';
import Img2 from '../Assets/2.png'
import AttributionRoundedIcon from '@mui/icons-material/AttributionRounded';

const RLevelCard = () => {
    return(
        <div class='mt-8 ml-0 sm:ml-8 p-1 sm:p-2'>
        <Card sx={{ minWidth:200 , minHeight :300 , borderRadius:10}}>
      <CardContent>
        <Typography variant="h6" component="div"  class="flex flex-row m-0 sm:m-3 pt-4 sm:py-0">
          <PermIdentityIcon color='primary' sx={{ fontSize: '2rem' }}/>
          <h1 class='pl-2 pb-4 sm:pb-8 font-normal text-base sm:text-2xl'>Reputation level</h1>
        </Typography>
        <Stack direction="row" spacing={2}>
          <div className='grid grid-cols-3 gap-12 text-blue-800 text-center pt-6 sm:pt-1'>
        <Typography variant="body2" component="div">
          <AccessTimeIcon sx={{ fontSize: '2rem' }}/><h1 className='text-black pt-3'>New Seller</h1>
        </Typography>
        <Typography variant="body2" component="div">
         <RecommendIcon sx={{ fontSize: '2rem' }}/><h1 className='text-black pt-3'>Great Seller</h1>
        </Typography>
        <Typography variant="body2" component="div">
        <AttributionRoundedIcon sx={{ fontSize: '2rem' }}/><h1 className='text-black pt-3'>king Seller</h1>
        </Typography>
        </div>
         </Stack>
         <div className='text-center pt-6 sm:pt-4'>
          <Typography variant="body2" component="div"  >
          <img src={Img2} height="200" width="350"/>
          <h6 className='text-gray-500 pt-6 sm:pt-4'>1 more positive feedback to reach Super Seller</h6>
          </Typography>
          </div>
      </CardContent>
    </Card>
        </div>
    )
}

export default RLevelCard;