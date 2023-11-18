# NETFLIX-GPT

 - npx create-react-app netflix-gpt
 - configured tailwindcss
 - Header (logo)
 - Login Form
 - Sign Up Form
 - Routing
 - Formik - can be used for forms, we will validate without it
 - useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 - Form validations 
 - Firebase - as backend (https://console.firebase.google.com/u/0/project/netflixgpt-f37a9/overview)
 - To enable auth in firbase disable extensions in browser(CORS etc)
 - Updated node to v20 ad logged in with apoorvaashyap001@gmail.com
 - firebase init command then npm run build then firebase deploy
 - Create sign up user account in firebase --> https://firebase.google.com/docs/auth/web/password-auth
 - Push user into Redux Store
 - Set up a redux store using redux toolkit
 - onAuthStateChanged  by firebase, whenever user signs in/up / sign out this will be called 
 - BugFix (redirecting user to login page if not signed in else to browse if logged in)

 # Features
  - Login/SignUp page
     - Sign in/Sign up form
     - After loggin in --> redirect to browse Page
  - Browse Page: (LoggedIn User)
     - Header
     - Main movie
       - Trailer
       - Title and Description
       - Movie Suggestion
       - Movies List (Horizontal scroll)
  - Netflix GPT
     - Search Bar
     - Movie Suggestion  

 # Routing
  - npm i -D react-router-dom       