import { useNavigate } from 'react-router-dom';
import {auth, provider} from '../Config/firebase';
import {signInWithPopup} from 'firebase/auth';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/Camera';


export const Login = () => {
    const navigate = useNavigate();


    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/home");
    }
    return(
        <div className='text-base text-center leading-loose mt-32'>
            <h2 className='text-xl font-bold'><CameraIcon />STARBUCKS</h2>
            <h1 class='text-5xl font-bold'>Login To The System</h1>
            <Button variant="outlined" onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
    );
}