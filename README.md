:construction: *ongoing project* :construction:

# Rest API Tutorial - Part 2

This tutorial aims to create a complete Node.js based RESTful API. Its purpose is to be self-explanatory, using especially code comments to achieve that.

It's good to mention that a previous knowledge on JavaScript basics is important for the right understanding of this tutorial.

Besides, it's not necessary to have a previous knowledge on Node.js, since we'll be covering the basics here.

If you haven't seen the first part of this tutorial, please visit [first part page](https://github.com/lucas-gustavoc/rest-api-tutorial-step1) in order to start it.

## Second Part Goal

In this second part of the tutorial, we're going to add some new requests and mock a database inside the project.

To achieve that, we're going to simulate a wish list, where people can register their wishes anonymously and assign them a priority.

## How to Use this Tutorial

You can make a good use of this tutorial by setting it up (see [Getting Started](#getting-started) section), reading the [How did we do it?](#how-did-we-do-it) section and reading the code comments.

While reading the [How did we do it?](#how-did-we-do-it) section, it's an interesting idea to switch between your browser and your code editor, so you can follow the steps we took directly inside the code.

## Resources

To make it happen, this project uses the following external resources:

- `Visual Studio Code`: We're using Visual Studio Code as code editor and command line tool. For details, please visit https://code.visualstudio.com/
- `Express.js`: Used as the basic structure of our API. For details, please visit https://expressjs.com/
- `Nodemon`: Used for debugging purposes. For details, please visit https://www.npmjs.com/package/nodemon
- `Jest`: Used for testing purposes. For details, please visit https://jestjs.io/
- `Postman`: Used for testing the application with API requests. In order to learn more about how to use Postman, you can visit the [Postman Introduction Page](https://learning.postman.com/docs/getting-started/introduction/).

## Getting Started

In order to get started with this tutorial, make sure **you have Node.js installed in your machine** (for details, please visit https://nodejs.org/en/download/) and a **code editor** available (we're using Visual Studio for this project, but it's up to you to choose one).

With all this in place, you can move on.

1. Download the project files and place them into a directory of your choice. You can also use the `git clone` tool if you prefer to.

2. Using a terminal (Visual Studio Code has a built-in terminal, which can be accessed pressing `ctrl + '`), navigate to the folder you've placed the files and type `npm install` and press Enter. This will install all the external modules we will be using in this tutorial.

3. Still in the terminal, type `npm start` and press Enter. This will run the application so you can see it working.

4. Go to your browser and access the address http://localhost:3000/. If you see the phrase "Hello World!", you're done with the setup. You can do some API tests with Postman (visit [Postman Introduction Page](https://learning.postman.com/docs/getting-started/introduction/) for details) accordingly the [API Reference](#api-reference) and after that you can go to the [How did we do it?](#how-did-we-do-it) section to start learning.

## How did we do it?



## API Reference

Updates:
- controller and model folders and files
- index changes
- uniqid installing
- Jest installing
- tests