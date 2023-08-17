<h1 align="center">Recette Social</h1>

<h2>1. Project:</h2>
<p>Social-network app based on food recipes.</p><br>

<h2>2. Functionalities:</h2>

- CRUD for recipes, users and ingredients.
- User authentication.
<br></br>

<h2>3. Development Team: receta2</h2>

- [grim mori](https://github.com/GrimMori) - Developer
- [Chander](https://github.com/ChanderRom) - Developer
- [Reoobot](https://github.com/Reoobot) - Developer
- [CapitenASA](https://github.com/CapitenASA) - Developer
<br></br>

<h2>4. Deployment</h2>

- [App](https://github.com/GrimMori/Recette-Social)<br></br>


<h2>5. Mockup</h2>

- [Figma](https://www.figma.com/file/HmkQ4Y62TmAeDB2UcXepNk/)<br></br>

<h2>6. Stacks</h2>

- Typescript
- HTML5
- CSS
- React
- Nest
- Axios
- Jest
- MongoDB
<br></br>

<h2>7. Documentation:</h2>
<h3>Requirements:</h3>

- Node and npm installed.
<br></br>

<h3>Installation:</h3>

Clone the repository: 

    $ git clone https://github.com/GrimMori/Recette-Social
Install node packages on each folder: 

    /server$ npm install
    /client$ npm install

Start the server and the client: 

    /server$ npm start
    /client$ npm start
<br>

<h3>Architecture</h3>
<p>The project is divided in 2 main folders. The Client folder contains the front-end and the Server folder contains the back-end.</p><br>
<h3>Client</h3>
<p>Pages:</p>

- Home
- Social
- Recipe List
- Recipe Detail
- Login/register
- User profile
- Post recipe

<p>User must be logged in via email + password in order to do most of the CRUD requests.</p>
<p>The requests can be found in the "api" folder.</p>
<p>To update the favicon visit the file in the browser (by default it will be at localhost:3000/favicon.ico).</p>
<h3>Server</h3>
<p>The database is created using Mongo. It consists of 3 main collections: Users, Recipes and Ingredients. There are other collections but they are unused or unfinished.</p>
<p>Each collection has its own schema, controller/service, and dto.</p>
<h4 id="security">Security</h4>
<p><b>Authentication</b> is done using a JWT. To log in you must do a POST request on /auth/login with a registered user's email and password. This will return the JWT and it will then be stored in the session storage.</p>
<p>Passwords are <b>encrypted</b> using bcrypt.</p>
