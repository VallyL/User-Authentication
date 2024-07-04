# Simple User Authentication with Local Storage

# Description: 
   This project is a simple example of how to implement basic user authentication in a web application. It demonstrates the use of local storage, form handling, and 
   JavaScript event listeners. It serves as a foundation for building more complex authentication systems in web applications.

# Key Features:
   - Data Validation: The sign-up process includes basic validation to ensure all fields are filled and that the email is unique.
   - Local Storage: User data is stored in the browser's local storage, persisting between sessions.
   - Logout Functionality: After logging in, users can click a "Logout" button to clear their session and return to the login/signup form.
   - Sign Up: Users can create new accounts by providing their name, phone number, email, and password.
   - Login: Users can log in using their registered email and password.

# How it works:
   - Form Submission: The signUpBtn and loginBtn event listeners handle form submissions for sign up and login, respectively.
   - Data Validation: The code checks if all fields are filled and validates the email for uniqueness during sign up.
   - User Data Storage: User data is stored in an array (users) and saved to local storage as a JSON string.
   - Login Verification: The loginBtn event listener checks if the entered email and password match an existing user in the local storage.

# Technologies:
   - HTML: For the structure of the webpage.
   - CSS: For styling the page elements.
   - JavaScript: For handling user interactions, data validation, storage, and session management.


- Note. This project uses local storage for simplicity, but for production-grade applications, consider using a server-side database and secure authentication methods.
