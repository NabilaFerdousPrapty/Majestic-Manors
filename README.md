# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Majestic Manors
## Live Site:https://majestic-manors.web.app/

Majestic Manors is a luxury real estate website designed to showcase premium properties such as penthouses, beachfront properties, resorts, private islands, villas, and mansions. With a unique design and user-friendly interface, Majestic Manors aims to provide an exceptional experience for users searching for their dream properties.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Pages](#pages)
4. [Authentication](#authentication)
5. [Data](#data)
6. [404 Page](#404-page)
7. [Dynamic Title](#dynamic-title)
8. [Dependencies](#dependencies)
9. [TechnologiesUsed] (#TechnologiesUsed)
10. [Contributing] (#Contributing)
11. [License] (#License)


## Introduction
Majestic Manors is a luxury real estate platform offering a curated selection of exclusive properties. From breathtaking penthouses to serene beachfront villas, Majestic Manors caters to the discerning needs of high-end property seekers. The website boasts a unique design, seamless navigation, and rich features to enhance the user experience.

## Features
- **Navbar**: The navbar includes the website name and menu items such as Home, Gallery, Services, About Us, and User Profile. The user profile is conditional and displays the user's image when logged in, with a hover effect to show the username. If not logged in, a login button is shown.
- **Login Page**: The login page allows users to authenticate using email and password, with options for Google and GitHub login. Incorrect credentials trigger an error notification.
- **Register Page**: Users can register with their name, email, photo URL, and password. Password requirements include at least one uppercase letter, one lowercase letter, and a minimum length of six characters. Registration success triggers a notification.
- **Banner Slider**: The homepage features a banner slider with four slides, implemented using the Swiper slider.
- **Exclusive Estate Section**: Users can explore exclusive estates categorized as Residential, each containing relevant information such as image, title, ID, segment name, description, price, status (sale/rent), area, location, facilities, and a "View Property" button.
- **Estate Details Page**: Clicking the "View Property" button redirects users to the estate details page, a protected route requiring login authentication. The page displays detailed information about the selected property.
- **404 Page**: Custom 404 route for handling page not found errors.
- **Dynamic Title**: Each page has a dynamic title reflecting its content or purpose.
- **Persistent User Information**: User information persists in the navbar even after reloading the page, with a loader displayed during authentication.

## Pages
- Home
- Gallery
- Services
- About Us
- User Profile
- Login
- Register
- Estate Details
- 404 Page

## Authentication
- Email and password-based authentication for login and registration.
- Google and GitHub login options.
- Error handling for incorrect credentials.

## Data
- Data for exclusive estates stored in JSON format, with a minimum of four and a maximum of nine entries per category.Also have Json Data for agents and reviews of my website data in json format

## 404 Page
- Custom 404 route to handle page not found errors.

## Dynamic Title
- Each page has a dynamic title reflecting its content or purpose.

## Dependencies
- [react-icons](https://www.npmjs.com/package/react-icons)
- [animate.css](https://www.npmjs.com/package/animate.css)
- [react-leaflet](https://www.npmjs.com/package/react-leaflet)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [swiper](https://swiperjs.com/get-started)
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)
## Technologies Used
- React
- JavaScript (ES6+)
- HTML5
- CSS3 (with Flexbox and Grid)
- Firebase
- Tailwind Daisy ui mamba ui


## Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to improve the Majestic Manors project.

## License
This project is licensed under the [MIT License](LICENSE).

### Feel free to reach out to us if you have any questions, feedback, or inquiries about Majestic Manors. Whether you're interested in exploring our exclusive estates, need assistance with authentication, or have suggestions for improving your browsing experience, our dedicated team is here to assist you. We value your input and are committed to providing exceptional service to our users. Don't hesitate to contact us via email, phone, or through the contact form on our website. Your satisfaction is our top priority, and we look forward to serving you with excellence.Feel free to contribute to our website as well 🏗️🏛️🏫🏨.


