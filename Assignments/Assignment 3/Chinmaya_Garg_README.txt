# EcoMart

EcoMart is an e-commerce platform designed to provide a seamless and user-friendly online shopping experience for a wide range of products. This project aims to showcase a robust architecture built using React, Python Django, and MySQL. The platform includes various features like product listing, filters, user management, and secure checkout processes.

- _Date Created_: 30 July 2024
- _Last Modification Date_: 30 July 2024
- _Git URL_: <https://git.cs.dal.ca/cgarg/csci5709-group01>
- _Deployed URL_: <http://csci5709-group-1.netlify.app/>

## Authors

- [Chinmaya Garg](mailto:ch745692@dal.ca) - Full Stack Developer B00925398
- [Kshitijkumar Patel](mailto:ks448340@dal.ca) - Full Stack Developer B00942090
- [Nisarg Khacharia](mailto:ns295986@dal.ca) - Full Stack Developer B00959791
- [Princess Kachhadiya](mailto:pr228942@dal.ca) - Full Stack Developer B00969786
- [Khyati Parmar](mailto:kh561877@dal.ca) - Full Stack Developer B00950872
- [Tejaswini Patel](mailto:tj504261@dal.ca) - Full Stack Developer B00945320

- #### Link to my Individual Branch

  [cg_wk](https://git.cs.dal.ca/cgarg/csci5709-group01/-/tree/cg_wk?ref_type=heads)

## Deployment

Frontend is deployed on Netlify and backend is deployed on PythonAnywhere.

## Built With

- [React](https://react.dev/learn)
- [Python](https://www.python.org/doc/)
- [Django](https://www.djangoproject.com/start/)
- [MySQL](https://dev.mysql.com/doc/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

## Features

**My Feature: Secure Checkout System**

- **Task 1**: Implemented a user-friendly form for adding and editing shipping addresses.
- **Task 2**: Developed validation for shipping and billing details to ensure data accuracy.
- **Task 3**: Integrated check to see if shipping and billing details are same.

**Other Features Identified**

### Product Listing Page with Filters

1. **Product Listing**: Display a list of products fetched from the backend.
2. **Filters**: Implement filters for price, category, condition, and other product attributes.
3. **Pagination**: Add pagination to navigate through the product list.

### User Management

1. **User Registration**: Allow users to sign up and create an account.
2. **User Login**: Enable users to log in and manage their accounts.
3. **Forgot Password**: Implement a feature for users to reset their passwords.

### Secure Checkout

1. **Contact Details**: Collect user contact information during checkout.
2. **Shipping Details**: Manage multiple shipping addresses.
3. **Order Summary**: Display a summary of the order, including items, shipping costs, and total price.

## Directory Structure

### Frontend

The frontend codebase is organized into the `public` and `src` directories. The `public` directory contains static assets, while the `src` directory holds the core source code, including JavaScript files, stylesheets, and various components.

frontend/
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── logo.png
│ └── manifest.json
├── src/
│ ├── css/
│ │ ├── CheckoutPage.css
│ │ ├── Filter.css
│ │ ├── ForgotPassword.css
│ │ ├── ForgotPasswordConfirm.css
│ │ ├── Header.css
│ │ ├── HomePage.css
│ │ ├── ItemDescription.css
│ │ ├── Login.css
│ │ ├── ProductCard.css
│ │ ├── SavedAddresses.css
│ │ ├── SellProduct.css
│ │ ├── ShippingDetailsForm.css
│ │ ├── SideComponent.css
│ │ └── SignUp.css
│ ├── images/
│ │ └── logo.png
│ ├── js/
│ │ ├── LandingPage/
│ │ │ ├── FeaturesSection.js
│ │ │ ├── FooterSection.js
│ │ │ ├── HeroSection.js
│ │ │ ├── Landing.js
│ │ │ └── LandingPageNav.js
│ │ └── UserManagement/
│ │ ├── ForgotPassword.js
│ │ ├── ForgotPasswordConfirm.js
│ │ ├── Login.js
│ │ ├── SideComponent.js
│ │ ├── SignUp.js
│ │ ├── CheckoutPage.js
│ │ ├── ContactUs.js
│ │ ├── FAQ.js
│ │ ├── Filter.js
│ │ ├── Header.js
│ │ ├── HomePage.js
│ │ ├── ItemDescription.js
│ │ ├── ProductCard.js
│ │ ├── SavedAddresses.js
│ │ ├── SellProduct.js
│ │ └── ShippingDetailsForm.js
│ ├── index.css
│ └── index.js
├── .gitignore
└── package.json


### Backend

The backend codebase follows a modular and organized approach, with separate directories for configuration, applications, and core logic.

backend/
├── apps/
│ ├── accounts/
│ └── application/
│ ├── application_urls/
│ │ ├── init.py
│ │ ├── CategoryUrls.py
│ │ ├── ItemsUrls.py
│ │ └── OrdersUrls.py
│ ├── models/
│ │ ├── init.py
│ │ ├── AddressModel.py
│ │ ├── CategoryModel.py
│ │ └── ItemModel.py
│ ├── serializers/
│ │ ├── init.py
│ │ ├── AddressSerializer.py
│ │ ├── CategorySerializer.py
│ │ └── ItemSerializer.py
│ └── views/
│ ├── init.py
│ ├── CategoryViews.py
│ ├── ItemViews.py
│ ├── OrderViews.py
│ └── UserViews.py
├── EcoMart/
│ ├── init.py
│ ├── asgi.py
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── templates/
├── .gitignore
├── manage.py
└── requirements.txt

## List of files worked on
**Backend**
- CSCI-5709-Grp-01/backend/apps/application/application_urls/OrdersUrls.py
- CSCI-5709-Grp-01/backend/apps/application/models/AddressModel.py
- CSCI-5709-Grp-01/backend/apps/application/serializers/AddressSerializer.py
- CSCI-5709-Grp-01/backend/apps/application/views/OrderViews.py

**Frontend**
- CSCI-5709-Grp-01/frontend/src/js/CheckoutPage.js
- CSCI-5709-Grp-01/frontend/src/js/SavedAddresses.js
- CSCI-5709-Grp-01/frontend/src/js/ShippingDetailsForm.js
- CSCI-5709-Grp-01/frontend/src/css/CheckoutPage.css
- CSCI-5709-Grp-01/frontend/src/css/ShippingDetailsForm.css
- CSCI-5709-Grp-01/frontend/src/css/SavedAddresses.css
- CSCI-5709-Grp-01/frontend/src/index.js


### Prerequisites

To run this project locally, ensure you have the following software installed on your machine:

- Python (3.x recommended)
- Django
- Node.js
- npm (Node Package Manager)
- MySQL

### Installation

Follow these steps to set up the development environment on your local machine:

1. **Clone the Repository:**
   Clone the repository to your local machine using the command:
   ```sh
   git clone https://github.com/patel-kshitij/CSCI-5709-Grp-01.git
   ```

2. **Navigate to the Project Directory:**
   ```sh
   cd CSCI-5709-Grp-01
   ```

3. **Install Backend Dependencies:**
   Navigate to the Django backend directory and install the required libraries:
   ```sh
   cd backend
   pip install -r requirements.txt
   ```

4. **Install Frontend Dependencies:**
   Navigate to the React frontend directory and install the required libraries:
   ```sh
   cd ../frontend
   npm install
   ```
5. **Apply Database Migrations:**
   Navigate back to the backend directory and run the following command to apply database migrations:
   ```sh
   cd ../backend
   python manage.py migrate
   ```
## Running the Project

After installing the dependencies, start both the Django development server and the React development server.

### Start the Django Development Server:
```sh
cd backend
python manage.py runserver
```

### Start the React Development Server:
```sh
cd frontend
npm start
```

## Deployment

To deploy the project, follow these steps:

### Configure Django for Production:
- Set `DEBUG = False` in your Django settings.
- Configure a production database MySQL.
- Set up static file serving in Django settings.

### Build the React App for Production:
```sh
cd frontend
npm run build

### Deploy Your Django Project:
- Use a hosting service like PythonAnywhere, Heroku, AWS, or DigitalOcean.
- Serve the built React files using Django or a separate server.
- Set up continuous integration/delivery (CI/CD) pipelines if needed.

## Built With
- [Django](https://www.djangoproject.com/) - Web framework for Python backend.
- [ReactJs](https://react.dev/) - The frontend framework used for the frontend.
- [Netlify](https://www.netlify.com) - Deployment environment for frontend.
- [PythonAnywhere](https://www.pythonanywhere.com) - Deployment environment for Python.

## References
- [Django Documentation](https://docs.djangoproject.com/en/5.0/)
- [ReactJs Documentation](https://legacy.reactjs.org/docs/getting-started.html)

