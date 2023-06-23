import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PollIcon from '@mui/icons-material/Poll';
import SellIcon from '@mui/icons-material/Sell';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Button from '@mui/material/Button';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

export const CardItem = ({ title, price, value , icon , color}) => {
    return (
        <div>
        <div class="flex justify-between font-light">
          <div className='pt-6 pl-6  text-white'><p>{title}</p></div>
          <div className='pt-6 pr-6  text-white'><p>{icon}</p></div>
        </div>
        <div>
        <div className='pl-6  text-3xl text-start font-light'>
            <h1 className='text-white tracking-widest'>{price}</h1>
            <Button variant="contained" color="inherit" sx={{color:color, borderRadius:8 , fontWeight:3 , marginTop:3}}>{value}</Button>
        </div>
      </div>
      </div>
    );
  };

const ColorCard = () => {
    return(
        <div className="flex flex-row mt-10 sm:ml-10 sm:mt-[-80px] ">
        <Box
          sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {width: 250 ,marginBottom:5, marginRight:5},}}>
          <div class='sm:ml-6'>
          <Paper sx={{ backgroundColor: '#1a237e' , height: 400 }}>
          <CardItem title="Order" price="187" value="+11%" icon={<AutoAwesomeMotionIcon/>} color="#1a237e" />
          </Paper>
          </div>
          <div class='sm:ml-6'>
          <Paper sx={{ backgroundColor: '#ff8f00' , height: 400 }}>
          <CardItem title="Revenue" price="$460,50" value="29%" icon={<PollIcon/>} color="#ff8f00" />
          </Paper>
          </div>
        <div class='sm:ml-6'>
            <Paper sx={{ backgroundColor: '#1a237e' , height: 400}}>
          <CardItem title="Price" price="$59" value="+10%" icon={<SellIcon/>} color="#1a237e" />
          </Paper>
        </div>
            <div class='sm:mt-32 sm:ml-20'>
            <Paper sx={{ backgroundColor: '#1a237e' , height: 270 }}>
           <CardItem title="Sold" price="1890" value="+11%" icon={<DataThresholdingIcon/>} color="#1a237e" />
           </Paper>
            </div>
        </Box>
      </div>
    )
}

export default ColorCard;