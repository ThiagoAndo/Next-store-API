<center><h1> Next Store API </h1> </center> </br><p align="center"> <img width="300" src="assets/Fetch.png"></p>


### **A Ready-Made REST API for Front-End Developers and E-Commerce Projects**

Welcome to the **Next Store API**—a purpose-built solution for front-end developers and students looking to practice and prototype e-commerce applications. Whether you're building a fully-featured online store or experimenting with front-end frameworks like React, this API provides everything you need to create realistic, data-driven applications.

## Table of contents

- [Why Use Next Store API](#why-use-next-store-api)
  - [Key Features](#key-features)
  - [Built With](#built-with)
  - [Who Is This For?](#who-is-this-for)
  - [Why Next Store API Stands Out](#why-next-store-api-stands-out)
  - [Screenshot](#screenshot)
  - [Project Folder Structure](#project-folder-structure)
  - [Links](#links)
- [Local Development](#local-development)
  - [Instructions](#instructions)
  - [Test](#🧪-test)
- [Author](#author)

## **Why Use Next Store API?**

Many developers face challenges finding a reliable, ready-to-use API when working on front-end projects. The **Next Store API** solves this by offering:

- A **comprehensive dataset** of sample products, complete with names, prices, descriptions, images, and categories.
- Full control over managing and retrieving:
  - **Products**: Fetch, filter, and sort data easily.
  - **Users and Addresses**: Simulate user accounts and associated data.
  - **Carts and Purchases**: Enable shopping cart functionality and purchase tracking.
- A lightweight, local **relational database** powered by the **better-sqlite3** package, making it easy to run and query data on your machine.

## **Key Features**

- **E-Commerce Focus**: Ideal for testing and building front-end stores.
- **RESTful Design**: Designed with simplicity and scalability in mind, supporting CRUD operations across multiple endpoints.
- **Local Database**: Includes a relational database setup for quick development without requiring external servers.
- **Custom Data Handling**: Some routes require JSON objects for insertion, simulating real-world back-end interactions.
- **Developer-Friendly Tools**:
  - **API Documentation**: Comprehensive documentation to guide integration.
  - **Postman Collection**: Pre-configured collection for testing endpoints.
  - **Interactive Website**: A demo interface built to interact with the API.

## **Built With**

- **Node.js** and **Express.js**: For building a robust and scalable RESTful API.
- **Jsonwebtoken (JWT)**: To implement secure user authentication and authorisation.
- **Nodemailer**: For handling email notifications, such as order confirmations or user account updates.
- **Body-parser**: To parse incoming request bodies and ensure smooth data handling.
- **Bcryptjs**: For securely hashing and storing user passwords.
- **better-sqlite3**: A fast and simple relational database solution for local development.
- **Bootstrap**: To create a responsive, user-friendly front-end interface for the API demo.

## **Who Is This For?**

This API is designed for:

- **Front-End Developers**: Practice API integration and state management with a realistic e-commerce dataset.
- **Coding Students**: Build fully functional e-commerce applications for learning or portfolios.
- **Prototyping Projects**: Quickly create and test front-end designs without worrying about back-end complexity.

## **Why Next Store API Stands Out**

Unlike generic APIs, the Next Store API is specifically tailored for e-commerce projects. It provides structured, realistic data and intuitive endpoints, helping developers focus on front-end functionality while experiencing back-end integration in a hands-on way.

## Project Folder Structure

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

## Local Development

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

---

Enjoy using the **Next Store API** and happy coding! 🚀

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
