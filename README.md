## Firebase authentication boilerplate with hooks!

[Live example 👀](https://pensive-villani-57d695.netlify.com/#/signup).
![Thumbnail](1_preview.png)

### This project uses :

-   [Create React App](https://github.com/facebook/create-react-app).
-   [Firebase](https://firebase.google.com)
-   [React-hook-form](https://github.com/react-hook-form/react-hook-form)

### usage :

1. Create a firebase project
2. Go to "Project settings"
3. Register your app
4. Copy the apiKey inside the firebaseConfig object
5. create a .env and past the apiKey previously copied like this:

```
REACT_APP_API_KEY='YOUR_KEY'
```

the context return several methods for user authentification e.g, signInUser, signUpUser etc, ... (it can be completed using other firebase method e.g, recover password ...).
It also returns a 'user' object that gives informations about the user that is currently logged in.
