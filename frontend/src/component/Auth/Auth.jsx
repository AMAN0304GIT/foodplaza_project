import React from "react";
import { Model } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

export const Auth = () => {
        const location=useLocation();
        const navigate=useNavigate();
        const handleOnClose=()=>{
            navigate("/")
        }
    return (
        <>
        
        <Model onClose={handleOnClose} open={
            location.pathname==="/account/register"
            || location.pathname==="/account/login"
            
        }>
            <Box sx={style}>
                {location.pathname==="/account/register"?<RegisterForm/>:<LoginForm/>}
            </Box>
        </Model>
        
        
        </>
    )
}