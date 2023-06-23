import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { start } from '@popperjs/core';
import { Stack } from '@mui/system';


const PSCCard = () => {
    return(
        <div class="flex flex-row">
        <div class='ml-1 sm:ml-16'>
        <Card sx={{ minWidth: 200 , minHeight :150 , borderRadius:10, marginTop:5}} >
      <CardContent>
        <Typography variant="h5" sx={{textAlign:start , margin:1}}>
           <h5 class='text-base sm:text-xl pb-2'>Product Sale Chart</h5>
        </Typography>
        <Stack direction="row" spacing={2}>
          <div className='grid grid-cols-2 gap-14 text-center'>
        <Typography variant="body2" component="div">
          <h1>$5620</h1><h1 className='text-gray-500'>Online Sales</h1>
        </Typography>
        <Typography variant="body2" component="div">
         <h1>$2350</h1><h1 className='text-gray-500'>Offline Sales</h1>
        </Typography>
        </div>
         </Stack>
          <Typography variant="body2" component="div" class='pl-3 sm:pl-6 pb-4 pt-2' >
          <img src='https://redyellowblue.org/wp-content/uploads/2017/07/ryb-color-wheel.png' height="170" width="170"/>
          </Typography>
          <Typography variant="body2" component="div">
            <ul role="list" class="list-disc pl-8 pb-2 space-y-1 text-ym font-normal sm:text-base text-justify ">
              <li>Gadget Branding</li>
              <li>Souvernir Gift Products</li>
              <li>Advertisement & Influencer</li>
            </ul>
        </Typography>
      </CardContent>
    </Card>
        </div>
      </div>
    )
}


export default PSCCard;