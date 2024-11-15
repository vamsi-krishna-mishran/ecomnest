
# This is a ecommerce application that has below features.**

_this application is under development_

1. user can create account, login and email-verification.
2. user can see all the products available.
3. user can sort the products by price and categories.
4. user can view details of each product by clicking on it.
5. user can wishlist the products and add them to cart.
6. user can checkout the products and pay using different payment methods using 3rd party payment methods.
7. user can view the orders placed by him.
8. admin has access to viewing the orders placed and change the status of orders.
9. admin can updated products.


# Tech stack used

=> For front-end I used **react,redux-toolkit,material-ui and vite** build tool.

=> For back-end I used **express.js, node.js and mongodb**.

=> For deployment I used **vercel** serverless service.


# setup back-end

=> clone the repository, open it in vscode.

=> go to backend_express and update .env accordingly.

'''
----------------------------------------------------------------------------------------------------------------
//connection string

MONGO_URI=""


//Frontend URL (adjust if needed)

ORIGIN=""

//Email credentials for sending password resets and OTPs

EMAIL=""

PASSWORD=""

//Token and cookie expiration settings

LOGIN_TOKEN_EXPIRATION="30d"  # Days

OTP_EXPIRATION_TIME="120000"  # Milliseconds

PASSWORD_RESET_TOKEN_EXPIRATION="2m"  # Minutes

COOKIE_EXPIRATION_DAYS="30"    # Days

//Secret key for jwt security
SECRET_KEY=""

//Environment (production/development)

PRODUCTION="false" # Initially set to false for development

-----------------------------------------------------------------
'''

=> run **npm install**, then run **npm run start**.


# setup front-end

=> go to frontend_react folder and open src/api/base.js file and update backend URI.

=> run **npm install**, then run **npm run start**



