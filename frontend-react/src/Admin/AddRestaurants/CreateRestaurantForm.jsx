// import React, { useState } from "react";
// import { useFormik } from "formik";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import { useDispatch } from "react-redux";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import { createRestaurant } from "../../State/Customers/Restaurant/restaurant.action";
// import CloseIcon from "@mui/icons-material/Close";
// import { uploadToCloudinary } from "../utils/UploadToCloudnary";
// import { CircularProgress, IconButton } from "@mui/material";
// const initialValues = {
//   name: "",
//   description: "",
//   cuisineType: "",
//   streetAddress: "",
//   city: "",
//   stateProvince: "",
//   postalCode: "",
//   country: "",
//   email: "",
//   mobile: "",
//   twitter: "",
//   instagram: "",
//   openingHours: "Mon-Sun: 9:00 AM - 9:00 PM",
//   images: [],
// };

// const CreateRestaurantForm = () => {
//   const dispatch = useDispatch();
//   const token = localStorage.getItem("jwt");
//   const [uploadImage, setUploadingImage] = useState("");

//   const handleSubmit = (values) => {
//     const data = {
//       name: values.name,
//       description: values.description,
//       cuisineType: values.cuisineType,
//       address: {
//         streetAddress: values.streetAddress,
//         city: values.city,
//         stateProvince: values.stateProvince,
//         postalCode: values.postalCode,
//         country: values.country,
//       },
//       contactInformation: {
//         email: values.email,
//         mobile: values.mobile,
//         twitter: values.twitter,
//         instagram: values.instagram,
//       },
//       openingHours: values.openingHours,
//       images: values.images,
//     };
//     dispatch(createRestaurant({ data, token }));
//     console.log(data);
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit: handleSubmit,
//   });

//   const handleImageChange = async (event) => {
//     const file = event.target.files[0];
//     setUploadingImage(true);
//     const image = await uploadToCloudinary(file);
//     formik.setFieldValue("images", [...formik.values.images, image]);
//     setUploadingImage(false);
//   };

//   const handleRemoveImage = (index) => {
//     const updatedImages = [...formik.values.images];
//     updatedImages.splice(index, 1);
//     formik.setFieldValue("images", updatedImages);
//   };

//   return (
//     <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
//       <div className="lg:max-w-4xl ">
//         <h1 className="font-bold text-2xl text-center py-2">
//           Add New Restaurant
//         </h1>
//         <form onSubmit={formik.handleSubmit} className="space-y-4">
//           <Grid container spacing={2}>
//             <Grid className="flex flex-wrap gap-5" item xs={12}>
//               <input
//                 type="file"
//                 accept="image/*"
//                 id="fileInput"
//                 style={{ display: "none" }}
//                 onChange={handleImageChange}
//               />

              
//               <label className="relative" htmlFor="fileInput">
//                 <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
//                   <AddPhotoAlternateIcon
//                     className="text-white"
//                   />
//                 </span>
//                 {uploadImage && <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
//                 <CircularProgress />
//                 </div>}
//               </label>

//               <div className="flex flex-wrap gap-2">
//                 {formik.values.images.map((image, index) => (
//                   <div className="relative">
//                     <img
//                       className="w-24 h-24 object-cover"
//                       key={index}
//                       src={image}
//                       alt={`ProductImage ${index + 1}`}
//                     />
//                     <IconButton
//                       onClick={() => handleRemoveImage(index)}
//                       size="small"
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         right: 0,
//                         outline: "none",
//                       }}
//                     >
//                       <CloseIcon sx={{ fontSize: "1rem" }} />
//                     </IconButton>
//                   </div>
//                 ))}
//               </div>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="name"
//                 name="name"
//                 label="Name"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.name}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="description"
//                 name="description"
//                 label="Description"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.description}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 id="cuisineType"
//                 name="cuisineType"
//                 label="Cuisine Type"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.cuisineType}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 id="openingHours"
//                 name="openingHours"
//                 label="Opening Hours"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.openingHours}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="streetAddress"
//                 name="streetAddress"
//                 label="Street Address"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.streetAddress}
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//                 fullWidth
//                 id="city"
//                 name="city"
//                 label="City"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.city}
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//                 fullWidth
//                 id="stateProvince"
//                 name="stateProvince"
//                 label="State/Province"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.stateProvince}
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//                 fullWidth
//                 id="postalCode"
//                 name="postalCode"
//                 label="Postal Code"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.postalCode}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="country"
//                 name="country"
//                 label="Country"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.country}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 id="email"
//                 name="email"
//                 label="Email"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.email}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 id="mobile"
//                 name="mobile"
//                 label="Mobile"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.mobile}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 id="twitter"
//                 name="twitter"
//                 label="Twitter"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.twitter}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 id="instagram"
//                 name="instagram"
//                 label="Instagram"
//                 variant="outlined"
//                 onChange={formik.handleChange}
//                 value={formik.values.instagram}
//               />
//             </Grid>
            
//           </Grid>
//           <Button variant="contained" color="primary" type="submit">
//             Create Restaurant
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateRestaurantForm;
import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { createRestaurant } from "../../State/Customers/Restaurant/restaurant.action";
import CloseIcon from "@mui/icons-material/Close";
import { uploadToCloudinary } from "../utils/UploadToCloudnary";
import { CircularProgress, IconButton } from "@mui/material";

const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  email: "",
  mobile: "",
  twitter: "",
  instagram: "",
  openingHours: "Mon-Sun: 9:00 AM - 9:00 PM",
  images: [],
};

// Custom validation function
const validate = (values) => {
  const errors = {};

  // Name validation
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z ]+$/.test(values.name)) {
    errors.name = "Name should contain only letters";
  }

  // Description validation
  if (!values.description) {
    errors.description = "Description is required";
  }

  // Cuisine Type validation
  if (!values.cuisineType) {
    errors.cuisineType = "Cuisine Type is required";
  } else if (!/^[A-Za-z ]+$/.test(values.cuisineType)) {
    errors.cuisineType = "Cuisine Type should contain only letters";
  }

  // Street Address validation
  if (!values.streetAddress) {
    errors.streetAddress = "Street Address is required";
  }

  // City validation
  if (!values.city) {
    errors.city = "City is required";
  }

  // State/Province validation
  if (!values.stateProvince) {
    errors.stateProvince = "State/Province is required";
  }

  // Postal Code validation
  if (!values.postalCode) {
    errors.postalCode = "Postal Code is required";
  }

  // Country validation
  if (!values.country) {
    errors.country = "Country is required";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  // Mobile validation
  if (!values.mobile) {
    errors.mobile = "Mobile is required";
  } else if (!/^[0-9]{10}$/.test(values.mobile)) {
    errors.mobile = "Mobile number should be 10 digits";
  }

  // Twitter validation (optional)
  if (values.twitter && !/^https?:\/\/[^\s]+\.[^\s]+$/.test(values.twitter)) {
    errors.twitter = "Invalid URL format (must contain a dot)";
  }

  // Instagram validation (optional)
  if (values.instagram && !/^https?:\/\/[^\s]+\.[^\s]+$/.test(values.instagram)) {
    errors.instagram = "Invalid URL format (must contain a dot)";
  }

  // Opening Hours validation
  if (!values.openingHours) {
    errors.openingHours = "Opening Hours are required";
  }

  // Images validation
  if (values.images.length === 0) {
    errors.images = "At least one image is required";
  }

  return errors;
};

const CreateRestaurantForm = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwt");
  const [uploadImage, setUploadingImage] = useState(false);

  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      description: values.description,
      cuisineType: values.cuisineType,
      address: {
        streetAddress: values.streetAddress,
        city: values.city,
        stateProvince: values.stateProvince,
        postalCode: values.postalCode,
        country: values.country,
      },
      contactInformation: {
        email: values.email,
        mobile: values.mobile,
        twitter: values.twitter,
        instagram: values.instagram,
      },
      openingHours: values.openingHours,
      images: values.images,
    };
    dispatch(createRestaurant({ data, token }));
    console.log(data);
  };

  const formik = useFormik({
    initialValues,
    validate, // Pass the custom validation function
    onSubmit: handleSubmit,
  });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Restaurant
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>

              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div className="relative" key={index}>
                    <img
                      className="w-24 h-24 object-cover"
                      src={image}
                      alt={`ProductImage ${index + 1}`}
                    />
                    <IconButton
                      onClick={() => handleRemoveImage(index)}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
              {formik.touched.images && formik.errors.images && (
                <div className="text-red-500">{formik.errors.images}</div>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                error={
                  formik.touched.description && Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="cuisineType"
                name="cuisineType"
                label="Cuisine Type"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cuisineType}
                error={
                  formik.touched.cuisineType && Boolean(formik.errors.cuisineType)
                }
                helperText={
                  formik.touched.cuisineType && formik.errors.cuisineType
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="openingHours"
                name="openingHours"
                label="Opening Hours"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.openingHours}
                error={
                  formik.touched.openingHours && Boolean(formik.errors.openingHours)
                }
                helperText={
                  formik.touched.openingHours && formik.errors.openingHours
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="streetAddress"
                name="streetAddress"
                label="Street Address"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.streetAddress}
                error={
                  formik.touched.streetAddress &&
                  Boolean(formik.errors.streetAddress)
                }
                helperText={
                  formik.touched.streetAddress && formik.errors.streetAddress
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="city"
                name="city"
                label="City"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="stateProvince"
                name="stateProvince"
                label="State/Province"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.stateProvince}
                error={
                  formik.touched.stateProvince &&
                  Boolean(formik.errors.stateProvince)
                }
                helperText={
                  formik.touched.stateProvince && formik.errors.stateProvince
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="postalCode"
                name="postalCode"
                label="Postal Code"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postalCode}
                error={
                  formik.touched.postalCode && Boolean(formik.errors.postalCode)
                }
                helperText={
                  formik.touched.postalCode && formik.errors.postalCode
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="country"
                name="country"
                label="Country"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="twitter"
                name="twitter"
                label="Twitter"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.twitter}
                error={formik.touched.twitter && Boolean(formik.errors.twitter)}
                helperText={formik.touched.twitter && formik.errors.twitter}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="instagram"
                name="instagram"
                label="Instagram"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.instagram}
                error={
                  formik.touched.instagram && Boolean(formik.errors.instagram)
                }
                helperText={formik.touched.instagram && formik.errors.instagram}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Create Restaurant
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateRestaurantForm;

