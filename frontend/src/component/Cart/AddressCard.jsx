import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Card, Button } from '@mui/material';


export const AddressCard = ({ item, showButton, handleSelectAddress }) => {
    

    if (!item) return null;
    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeIcon />
            <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lg text-white'>Home</h1>
                <p>Mumbai, new shivam building, gokuldham Market, 530086, Maharashtra, India

                </p>
                {showButton && (
                    <Button varient="outlined" fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>
                    )}

            </div>

        </Card>
    )
}

export default AddressCard;
