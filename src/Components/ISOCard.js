import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { start } from '@popperjs/core';
import ErrorIcon from '@mui/icons-material/Error';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Stack, fontSize } from '@mui/system';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RecommendIcon from '@mui/icons-material/Recommend';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PollIcon from '@mui/icons-material/Poll';
import SellIcon from '@mui/icons-material/Sell';
import { BorderAll } from '@mui/icons-material';
import Img1 from '../Assets/1.png'
import RLevelCard from './RLevelCard';
import PSCCard from './PSCCard';
import ColorCard from './ColorCard'

const ISOCard = () => {
    return (
        <div sm={{Width: 200}}>
{/* //---------------------------------------------------------------------------------- */}
        <div class=" m-8 text-center sm:hidden">
          <Card sx={{ minWidth: 200, minHeight: 300, borderRadius:10 }}>
        <CardContent>
          <Typography variant="h6" component="div" class="flex flex-row m-2" >
            <ErrorIcon color='primary' sx={{ fontSize: '2rem' }}/>
            <h1 class='pl-2 font-normal text-2xl'>ISO 9001 pre</h1>
          </Typography>
            <div class='pb-2 '>
            <Typography  sx={{ fontSize: '0.6rem' }}>
            <img src={Img1} height="100" width="100" class='ml-16'/>
            <p className='text-gray-500 pt-3 font-thin'>You've completed 98% of your order</p>
            </Typography>
            </div>
            <div className='grid grid-cols-2 gap-2 '>
          <Typography variant="body2" class="space-y-2 ">
            <AccessTimeIcon color='primary'/><p className='text-gray-500'>Customer</p><h1>130</h1>
          </Typography>
          <Typography variant="body2" class="space-y-2 ">
           <AvTimerIcon color='primary' /><p className='text-gray-500'>Delivery time</p><h1>2-3 days</h1>
          </Typography>
          <Typography variant="body2" class="space-y-2 " >
            <ThumbUpIcon color='primary'/><p className='text-gray-500'>God Feedback</p><h1>1505</h1>
          </Typography>
          <Typography variant="body2" class="space-y-2 ">
            <ThumbDownAltIcon color='primary'/><p className='text-gray-500'>Bad Feedback</p><h1>10</h1>
          </Typography>
          </div>
        </CardContent>
      </Card>
         <RLevelCard/>
         <PSCCard/>
         <ColorCard/>
          </div>
{/* //----------------------------------------------------------------------------------          */}
    <div class='hidden sm:block'>
    <div class="flex flex-row">
        <div>
        <Card sx={{ minWidth: 500, minHeight: 300, borderRadius:10 , margin:4 }}>
      <CardContent>
        <Typography variant="h6" component="div" class="flex flex-row m-5">
          <ErrorIcon color='primary' sx={{ fontSize: '2rem' }}/>
          <h1 class='pl-2 font-normal text-2xl'>ISO 9001 pre</h1>
        </Typography>
        <Stack direction="row" spacing={2}>
          <div>
          <Typography  sx={{ fontSize: '0.6rem', paddingLeft:3 }}>
          <img src={Img1} height="120" width="120"/>
          <p className='text-gray-500 pt-3 font-thin'>You've completed 98% of your order</p>
          </Typography>
          </div>
          <div className='grid grid-cols-2 gap-2 '>
        <Typography variant="body2" class="space-y-2 ">
          <AccessTimeIcon color='primary'/><p className='text-gray-500'>Customer</p><h1>130</h1>
        </Typography>
        <Typography variant="body2" class="space-y-2 ">
         <AvTimerIcon color='primary' /><p className='text-gray-500'>Delivery time</p><h1>2-3 days</h1>
        </Typography>
        <Typography variant="body2" class="space-y-2 " >
          <ThumbUpIcon color='primary'/><p className='text-gray-500'>Good Feedback</p><h1>1505</h1>
        </Typography>
        <Typography variant="body2" class="space-y-2 ">
          <ThumbDownAltIcon color='primary'/><p className='text-gray-500'>Bad Feedback</p><h1>10</h1>
        </Typography>
        </div>
         </Stack>
      </CardContent>
    </Card>
        </div>
            <RLevelCard/>
            <PSCCard/>
    </div>
    <ColorCard/>
    </div>
    

{/* //---------------------------------------------------------------------------------- */}
       
</div>
          
            
    )
}

export default ISOCard;




