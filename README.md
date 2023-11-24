## Getting Started

***nodejs version should be >=18***

First , install necessary dependencies
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Customization option added
Just below the name you can see the **User's bio** you can click on the ***edit icon*** a modal will open therefore with the help of that you can change the bio it will be changed temporarily as i am storing this static data in userData.js file i am not re-writing the file. Hence bio reverts on page refresh

## Components

- Layout.js
  It Consists of Project's Layout which includes Navbar and Footer and you can change its theme as per user selects it

- Navbar.js
  Consists of a Header which redirects to the Home page

- Footer.js
  Only for design purpose

- UserView.js
  Consists of user details passed down by getStaticProps function of nextjs consists details about user

## Helpers

- userData.js
  Contains an array of objects i.e User details **_( Currently only 4 )_**
  **_Schema : {_**  
   **_name : String,_**
  **_profilePic : String,_**
  **_bio : String,_**
  **_theme : String,_**
  **_about : String,_**
  **_username : String_**
  }

- theme.js
  It consists of values related to theme like:-
    - Its Types:
        - dark
        - light
        - grey
        - nuetral

  Example : 
  **_{_**
  **_dark : {_**
  **_primary : [primary color],_**
  **_secondary : [secondary color],_**
  **_}_**
  **_}_**
