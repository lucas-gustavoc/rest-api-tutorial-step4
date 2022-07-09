*:construction: On going project... :construction:*

# Rest API Tutorial - Part 3

This tutorial aims to create a complete Node.js based RESTful API. Its purpose is to be self-explanatory, using especially code comments to achieve that.

It's good to mention that a previous knowledge on JavaScript basics is important for the right understanding of this tutorial.

Besides, it's not necessary to have a previous knowledge on Node.js, since we'll be covering the basics here.

If you haven't seen this tutorial from the beginning, please visit [first part page](https://github.com/lucas-gustavoc/rest-api-tutorial-step1) in order to start it.

## Index

:construction: *To be done...* :construction:

## Third Part Goal

In this third part of the tutorial, we're going to add some security features to our API.

This will allow users to login and manage only their wishes, not anyone else's.

In order to achieve that, we will make use of cryptography tools and the JWT standard (which we'll be explaining later).

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

:construction: *To be done...* :construction:

## How did we do it?

:construction: *To be done...* :construction:

## What Comes Next?

:construction: *To be done...* :construction:

#### Other Parts Links:
- [Part 1](https://github.com/lucas-gustavoc/rest-api-tutorial-step1)
- Part 3: *on the way...*

## API Reference

Here you can see the requests this API supports at this moment. You can test each one of these requests using Postman (see the [Resources](#resources) section for details).

#### Create a New Wish

To create a new wish, you can make a HTTP Post request to the URL below. There are some requirements you should consider:
- Set the property `Content-Type` to `application/json` in your request's Headers Section.
- Send a raw body in JSON format with the wish to register, containing the properties `wish` (which would be the wish decription) and `priority`.

If the server is able to validate and register the wish, it will return a set of JSON data containing the wish you sent along with its new ID (HTTP Status: `201`). Otherwise, it will return an error message with either the status `404` (Bad Request - Invalid Entry) or the status `500` (Some Server Error).

```
POST /wishes
```

#### Get All Registered Wishes

To get all the registered wishes, you can make a GET Request to the URL below. Remember that, in this part of the tutorial, the application has no actual persistence yet, so all registered wishes will be lost at the end of the server execution.

If the server can process the GET request, it will return a set of JSON data containing all the wishes registered at the runtime (HTTP Status: `200`). In case of some internal error, it will return the error message with the status `500` (Some Server Error).

```
GET /wishes
```

#### Get One Wish by ID

Once you have the ID of some wish, you can get it sending a GET Request to the URL below.

If the server finds the requested ID, it will return a set of JSON data containing the proper wish (HTTP Status: `200`). Otherwise, it will return an error message with the status `404` (Not Found) or `500`(Some Server Error).

```
GET /wishes/<id>
```

#### Update One Wish

You can update one wish's data by sending a PATCH Request to the URL below. Just like the create request, you should consider the following requirements in order to make it work:
- Set the property `Content-Type` to `application/json` in your request's Headers Section.
- Send a raw body in JSON format with the information to be updated, containing the property `wish` or/and `priority`.

If the server is able to update the referred wish, it will return that same wish already updated in JSON format (HTTP Status: `200`). Otherwise, it will return an error message with the status `404` (Not Found) or `500`(Some Server Error).

```
PATCH /wishes/<id>
```

#### Delete One Wish

You can delete one wish by sending a DELETE Request to the URL below.

In case of successful deletion, it will return a JSON data with a message telling you that with the status `200`. Otherwise, it will return an error message with the status `404` (Not Found) or `500`(Some Server Error).

```
DELETE /wishes/<id>
```


- Gravar id do usuário no wish
- utilizar dados do usuário para operações com wish
- testar os diversos middlewares
- incrementar testes do wish após inclusão de novo campo
- criar rota de welcome para testar login bem-sucedido
- Colocar chave do JWT em arquivo externo (ou no .env)