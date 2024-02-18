<h1 align="center">

 The eComShop

  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en) 
  [![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
  [![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)
  [![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
</h1>

## 🛍️Description
The eComShop is a shop! Well, not really. It's actually a tiny shop inside a database created using MySQL. Sequalize was then used to develop models. "Customer" can survey the stores poducts as well as view categories and tags through GET, POST, PUT, and DELETE routes.  
    
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Technology Used](#technology-used)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

## Installation

  To install required dependencies, run the following command:
  > npm i

Set up .env file with database name and login info:

> <div>DB_NAME='YOUR DATABASE NAME'</div>
> <div>DB_USER='YOUR USERNAME'</div>
> <div>DB_PW='YOUR PASSWORD'</div>

Initiate database in MySQL terminal:
> source schema.sql

To insert seed data, run the following command:
> npm run seed

 ## 🏷️Usage
 
To initiate the app, run the following command:
> npm start

To initiate the app with nodemon, run the following command:
> npm run watch

### Features
- Practical seed data
- Organized routes
- Updatable info

### Post and Put Requests JSON Format
To make requests to the database, JSON formating must match model parameters

 **CATEGORY**
  ```
  { 
  "name": "STRING INPUT" 
  }
  ```
 **TAG**
  ```
  { 
  "name": "STRING INPUT" 
  }
  ```
  **PRODUCT**
  ```
  { 
  "product_name": "STRING INPUT",   
  "price": DECIMAL INPUT,   
  "stock": INTEGER INPUT,   
  "tags": [INTEGER INPUTS],
  "category_id": INTEGER INPUT
  }
  ```

[eComShopDemo.webm](https://github.com/LexiKHecht/eComShop/assets/145725343/0d116bbc-93ac-44dd-af57-e4e0fb195485)


## Technology Used
- [Express](https://expressjs.com/)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Sequalize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://nodemon.io/)

## License
- [MIT](https://opensource.org/license/mit/)

## Contributing
  Please follow this link for best practices for contributing to an open source project:
  https://opensource.guide/how-to-contribute/

  ## Questions
 If you have any questions or issues, please contact me at Lexikhecht@gmail.com. You can also find more of my work at https://github.com/LexiKHecht.
