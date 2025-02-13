import React, { useState } from 'react';
import { TextField, Button, makeStyles, Card } from '@mui/material';
import { Create } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction } from '../../State/Customers/Restaurant/restaurant.action';

const CreateCategory = ({ handleClose }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { auth, restaurant } = useSelector((store) => store);
  const jwt = localStorage.getItem('jwt');

  const [formData, setFormData] = useState({
    categoryName: '',
    restaurantId: '',
  });

  const [errors, setErrors] = useState({
    categoryName: '',
  });

  // Validation function
  const validateCategoryName = (value) => {
    if (!value) {
      return 'Category Name is required';
    } else if (!/^[A-Za-z ]+$/.test(value)) {
      return 'Category Name should contain only letters';
    }
    return '';
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submission
    const categoryNameError = validateCategoryName(formData.categoryName);
    if (categoryNameError) {
      setErrors({ categoryName: categoryNameError });
      return;
    }

    const data = {
      name: formData.categoryName,
      restaurant: {
        id,
      },
    };

    dispatch(createCategoryAction({ reqData: data, jwt: auth.jwt || jwt }));
    setFormData({
      categoryName: '',
      restaurantId: '',
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
    if (name === 'categoryName') {
      setErrors({
        ...errors,
        categoryName: validateCategoryName(value),
      });
    }
  };

  // Check if the form is valid
  const isFormValid = !errors.categoryName && formData.categoryName.trim() !== '';

  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">Create Category</h1>
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <TextField
            label="Category Name"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(errors.categoryName)} // Show error state
            helperText={errors.categoryName} // Display error message
          />

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

export default CreateCategory;