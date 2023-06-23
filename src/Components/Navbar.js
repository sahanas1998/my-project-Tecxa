import CameraIcon from '@mui/icons-material/Camera';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link, useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import {auth} from '../Config/firebase';
import { useNavigate } from 'react-router-dom';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import React, { useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "@firebase/auth";
import { Box } from '@mui/system';


const Navbar = () => {
  const location = useLocation();

  const [user] = useAuthState(auth);

  
  const navigate = useNavigate();

  const userSignOut = async () => {
      alert("Log out to the system")
      await signOut(auth);
      localStorage.clear();
      navigate("/login");
  }

  const [open,setOpen]=useState(false);

  const Links =[
    {name:"Home",link:"/home"},
    {name:"Opportunity",link:"/opportunity"},
    {name:"Account",link:"/account"},
    {name:"Presales",link:"/presales"},
    {name:"Partners",link:"/partners"},
    {name:"Resources",link:"/resources"},
    {name:"Subscription",link:"/subscription"},
  ];

  const closeMobileMenu = () => {
    setOpen(false);
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-200 flex justify-between items-center p-4 sm:p-6 md:6">
     <div className="flex">
        <div>
          <CameraIcon sx={{ fontSize: '2rem' }} />
        </div>
        <div>
          <h2 className="text-base md:test-2xl">
            <b>STARBUCKS</b>
          </h2>
          <p className="text-xx">
            <b>RIVERFRONT WILMINGTON </b> | 329 JUSTISON
          </p>
        </div>

     </div>
      <div className="text-sm flex">
      <ul className={`md:flex md:items-center md:pb-0 pb-12 pt-12 sm:pt-0  absolute md:static md:z-auto z-[-1]  w-full md:w-auto md:pl-0 pl-9 duration-500 ease-in ${open ? 'left-5 ':'left-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className={`md:ml-6 text-xl md:my-0 my-7 text-black-800 font-semibold ${location.pathname === link.link ? 'underline' : ''}`}>
              <Link to={link.link} onClick={closeMobileMenu}>{link.name}</Link>
            </li>
          ))
        }
      </ul>
      </div>
      <div className="flex space-x-2  items-center">
        <div class='space-x-2 '>
        <SettingsOutlinedIcon />
        <Badge color="warning" variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
          <NotificationsNoneOutlinedIcon />
        </Badge>
        </div>

          {user && (
                    <>
                        <img src={user?.photoURL || ""} height="35" width="35" alt="pic" onClick={userSignOut} className='rounded-full'/>
                        <h3 className="hidden sm:block text-base font-medium">{user?.displayName}</h3>
                    </>
                        
                    )}
        
        <Box onClick={()=>setOpen(!open)} className=' flex text-3xl absolute left-2 top-20 items-center cursor-pointer md:hidden'>
        <CalendarViewDayIcon  name={open ? 'close':'menu'}/>
      </Box>
      </div>
    </div>
  );
};

export default Navbar;
