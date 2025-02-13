import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient } from '../../State/Admin/Ingredients/Action';

const CreateIngredientForm = ({ handleClose }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { auth, restaurant, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem('jwt');

  const [formData, setFormData] = useState({
    name: '',
    ingredientCategoryId: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    ingredientCategoryId: '',
  });

  // Validation function for ingredient name
  const validateIngredientName = (value) => {
    if (!value) {
      return 'Ingredient Name is required';
    } else if (!/^[A-Za-z ]+$/.test(value)) {
      return 'Ingredient Name should contain only letters';
    }
    return '';
  };

  // Validation function for category
  const validateCategory = (value) => {
    if (!value) {
      return 'Category is required';
    }
    return '';
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submission
    const nameError = validateIngredientName(formData.name);
    const categoryError = validateCategory(formData.ingredientCategoryId);

    if (nameError || categoryError) {
      setErrors({
        name: nameError,
        ingredientCategoryId: categoryError,
      });
      return;
    }

    const data = { ...formData, restaurantId: restaurant.usersRestaurant.id };
    dispatch(createIngredient({ jwt: auth.jwt || jwt, data }));

    setFormData({
      name: '',
      ingredientCategoryId: '',
    });
    handleClose();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field on change
    if (name === 'name') {
      setErrors({
        ...errors,
        name: validateIngredientName(value),
      });
    } else if (name === 'ingredientCategoryId') {
      setErrors({
        ...errors,
        ingredientCategoryId: validateCategory(value),
      });
    }
  };

  // Check if the form is valid
  const isFormValid =
    !errors.name && !errors.ingredientCategoryId && formData.name.trim() !== '' && formData.ingredientCategoryId !== '';

  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">Create Ingredient</h1>
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <TextField
            label="Ingredient"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(errors.name)} // Show error state
            helperText={errors.name} // Display error message
          />

          <FormControl fullWidth error={Boolean(errors.ingredientCategoryId)}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.ingredientCategoryId}
              label="Category"
              name="ingredientCategoryId"
              onChange={handleInputChange}
            >
              {ingredients.category.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            {errors.ingredientCategoryId && (
              <div className="text-red-500 text-sm mt-1">
                {errors.ingredientCategoryId}
              </div>
            )}
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isFormValid} // Disable button if form is invalid
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;