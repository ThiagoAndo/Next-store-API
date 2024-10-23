<center><h1> Next Store API </h1> </center> </br><p align="center"> <img width="300" src="assets/Fetch.png"></p>
  
<div>
        <p > Welcome to the Next Store API. This project includes <a href="https://next-store-api-62m2.onrender.com/doc">API documentation</a>, a Postman collection, and a<a href="https://next-store-api-62m2.onrender.com/doc"> website</a> built to interact with it.
        The products endpoint provides a comprehensive dataset of
          sample   product information,  including details like names, prices, descriptions, images, and categories, ideal for testing and prototyping e-commerce applications. This API allows you to manage and retrieve products, users, users' addresses, users'carts and users' purchases. This is a Restful API build using Node.js and Next.js. It also uses a package called <a href="https://www.npmjs.com/package/better-sqlite3">better-sqlite3</a> that allows you to create a local relational database and query it using Node.js. Thus, some routes require the client to send one JSON object per request, which will be inserted into the table.
          <br />
          <br /><br />
        
       
</div>

## Table of contents

- [Overview](#overview)
  - [Built using](#built-using)
  - [Folder structure](#folder-structure)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Local development](#local-development)
  - [Instructions](#instructions)
  - [Test](#🧪-test)
- [Author](#author)

## Overview

 <h3 class="margin">The API provides endpoints for managing and retrieving:</h3>
        <ul>
          <li>Products</li>
          <li>Users</li>
          <li>Users' Addresses</li>
          <li>Users' Carts</li>
          <li>Users' Purchases</li>
        </ul>

## Built using

- Express JS
- Jsonwebtoken
- Nodemailer
- Body-parser
- Bcryptjs
- Bootstrap

## Folder structure

</br>
</br>
</br>

<p align="center" style="solid 1px red">
    <img  src="assets/projectStructure.png" >
</p>
</br>
</br>

## Screenshot

</br>
</br>
</br>

### API documentation

<p align="center" style="solid 1px red">
    <img  src="assets/screenshots/doc_2.png" width="700" >
</br>
</p>
</br>
</br>
</br>
<p align="center" style="solid 1px red">
    <img  src="assets/screenshots/doc_3.png" width="700">
</br>
</p>
</br>
</br>
</br>

### User Interface

<p align="center">
    <img src="./assets/screenshots/img_1.png" width="700" >
</p>
</br>
<p align="center">
     <img src="./assets/screenshots/img_2.png" width="700" >
</p>
</br>

</br>
<p align="center" >
      <img src="./assets/screenshots/img_3.png" width="700" >
</p>
</br>
<p align="center">
       <img src="./assets/screenshots/img_4.png" width="700" >
</p>
</br>

</br>
<p align="center">
       <img src="./assets/screenshots/img_4.2.png" width="700" >
</p>
</br>
<p align="center">
       <img src="./assets/screenshots/img_4.3.png" width="700" >
</p>
</br>
<p align="center">
       <img src="./assets/screenshots/img_5.png" width="700" >
</p>
</br>


## Links

- Alive website - [User Interface to test API](https://next-store-api-62m2.onrender.com/userInterface)
- Alive website - [API documentation](https://next-store-api-62m2.onrender.com/doc)
<img align="right" src="https://i.ibb.co/CJfW18H/ship.gif" width="200"/>

## Local development

To run the project from a container, ensure that Node.js (version 14 or higher) and npm (version 7 or higher) are installed on your development machine.

### Instructions

- Fork this repository
- Clone your forked repository
- CD into the project folder
- Create a Gmail account if you don’t have one. Additionally, enable two-step verification on your Google Account to generate an App Password. You will find usefull informations about how to do it on <a href="https://medium.com/@ayushnandanwar003/a-step-by-step-guide-to-sending-emails-with-node-js-and-nodemailer-via-gmail-c6fe1810f9fe">this resource</a>.
- Create a `.env` file in the root directory with those variables:

```shell
NODE_ENV = development
PORT =8080
EMAIL = YOUR EMAIL
PASSWORD = YOUR PASSWORD
```

To install the application:

```shell
npm install
```

To start the development server:

```shell
node app.js
```

### 🧪 Test

After the project is installed and running, you can understand and test the application by readding the documentation. All you have to do is to enter the following url:

```shell
http://localhost:8080/doc
```

Or if you wish to interact with it by using a intuitive front-end website:

```shell
http://localhost:8080/userInterface
```

If you would like to check a real e-commerce website which uses Next-tore-API as backend go to this repository <a href="https://github.com/ThiagoAndo/Store-e-commerce.git"><span style=" font-style: italic">Store-e-commerce</span></a>:

## Author

- Github - [Thiago Ando de Freitas](https://github.com/ThiagoAndo)
- Personal website - [Portfolio](https://thiago-freitas-portfolio.vercel.app/)
- Alive API - [Documentation](https://next-store-api-62m2.onrender.com/doc)
- Alive API - [UI](https://next-store-api-62m2.onrender.com/userInterface)
</br></br>

<div style="text-align: center" >
<h3 style="color:black;">"The impediment to action advances action. What stands in the way becomes the way."</h3>
<h3 style="color:black;">Marcus Aurelius </h3>
</div>
