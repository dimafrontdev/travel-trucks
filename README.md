# TravelTrucks - Camper Rental Web App

## Overview

**TravelTrucks** is a frontend application for a camper rental company, built to enhance user experience by enabling easy browsing, filtering, and booking of campers. The app features a homepage with a call-to-action banner, a catalog page with camper listings and filtering options, and detailed camper pages with booking functionality. Designed with a focus on React, Redux for state management, and Vite for a fast development environment, this project integrates modern web development technologies for optimal performance and user experience.

## Features

- **Homepage** with a welcoming banner and call-to-action button.
- **Catalog page** that displays all available campers, with filter options for location, camper type, and features (e.g., air conditioning, kitchen).
- **Individual camper page** showing camper details, gallery, user reviews, and a booking form.
- **Favorites** to allow users to save preferred campers.
- **Filtering** for quick searches and easier browsing.
- **Load More** functionality to retrieve more campers.
- **Booking Form** with confirmation notification on successful booking.

## API Endpoints

- **GET /campers** - Retrieve all camper listings, with optional filtering parameters.
- **GET /campers/:id** - Get details for a specific camper by its ID.

## Technologies Used

- **Frontend Framework:** React with Vite for a fast and optimized development environment.
- **State Management:** Redux (with `@reduxjs/toolkit`) to manage global state, including campers list, filters, and favorites.
- **Routing:** React Router for navigation.
- **HTTP Client:** Axios for fetching data from the API.
- **Styling:** SCSS.
- **Date Handling:** React Datepicker for booking form date inputs.
- **Form Handling:** Formik and Yup for form validation in the booking form.
- **Notifications:** React Hot Toast for notifying users upon successful booking.

## Installation and Setup

1. **Clone the repository:**
```bash
   git clone https://github.com/your-username/goit-neo-react-hw-module1.git
```
2. **Navigate to the project directory:**
 ```bash
cd goit-neo-react-hw-module1 
```
3. **Install dependencies:**
 ```bash
yarn install
```
4. **Run the development server:**
 ```bash
yarn dev 
```
5. **Build for production:**
 ```bash
yarn build
```