import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ingredients = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Almonds", "Walnuts", "Pumpkin Seeds"]

  },

  {
    category: "Protein",
    ingredients: ["Chicken", "Beef", "Fish"]
  },
  {
    category: "Vegetables",
    ingredients: ["Broccoli", "Carrots", "Spinach"]
  }
]

const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log("value");
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex item-center justify-between">
          <div className="lg:flex item-center lg:gap-5">
            <img className="w-[7rem] h-[7rem] object-cover" src="" alt="" />
            <div className="space-y-1 lg:space-y-5 lg:max-2-2x1">
              <p className="font-semibold text-xl">Pizza</p>
              <p>₹99</p>
              <p className="text-gray-400">Delicious meal!</p>
            </div>
          </div>
        </div>
        Accordion 1
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {
              ingredients.map((item) =>
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((ingredient) => (
                      <FormControlLabel
                        control={
                          <Checkbox onChange={() => handleCheckBoxChange(ingredient)} />
                        }
                        label={ingredient}
                        key={ingredient}
                      />
                    ))}
                  </FormGroup>


                </div>)
            }


          </div>
          <div className="pt-5">
            <Button variant="contained" disabled={false} type="Submit">{true ? "Add to Cart" : "Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}


export default MenuCard