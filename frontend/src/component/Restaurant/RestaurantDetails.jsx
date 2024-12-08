import React, { useState } from 'react'
import{Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from'@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';
import Grid from '@mui/material/Grid';

const categories=[
    "Pizza",
    "Biryani",
    "Chicken",
    "Noodles",
    "Rice"
]


const foodTypes=[
    {label:"All",value:"all"},
    {label:"Veg",value:"veg"},
    {label:"Non-veg",value:"Non-veg"},
    {label:"Seasonal",value:"Seasonal"}

]

const menu = [1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType,setfoodType]=useState("all")
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
        
    }
    return(
        <div className='px-5 lg:px-20'>

            <section>
                <h3 className="text-greay-500 py-2 mt-10">Home/india/FoodPlaza/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>

                            <img className="w-full h-[40vh] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s " alt=" " />

                        </Grid>

                        <Grid item xs={12} lg={6}>

                            <img className="w-full h-[40vh] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s " alt="" />

                        </Grid>
                    </Grid>
                </div>

                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">FoodPlaza</h1>
                    
                    <p className='text-gray-500 mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellendus eveniet similique explicabo pariatur culpa laborum itaque rerum sapiente. Suscipit nemo, error eius ratione laborum atque! Maiores temporibus minus eveniet.</p>

                    <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
<LocationOnIcon/>
                        <span>
                            Mumbai, Maharashtra
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
<CalendarTodayIcon/>
                        <span>
                            Mon-Sun: 10:00 AM - 11:00 PM (Today)
                        </span>
                    </p>
                    </div>
                </div>
            </section>

            <Divider/>
            <section className='pt-[2rem] lg:flex relative'>

                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box spy-y-5 lg:sticky top-28 '>
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                            Food Type
                        
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"Fieldset"}>
                                <RadioGroup onChange={{handleFilter}} name='food_type' value={foodType}>
                                {foodTypes.map((item)=> 
                                <FormControlLabel key={item.value}
                                value={item.value} control={<Radio/>}
                                label={item.label} />)}
                                </RadioGroup>
                                </FormControl>                      
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                            Food Category
                        
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"Fieldset"}>
                                <RadioGroup onChange={{handleFilter}} name='food_type' value={foodType}>
                                {categories.map((item)=> 
                                <FormControlLabel key={item}
                                value={item} control={<Radio />}
                                label={item} />)}
                                </RadioGroup>
                                </FormControl>                      
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map((item)=><MenuCard/>)}
                </div>

            </section>

        </div>
    )
}

export default RestaurantDetails