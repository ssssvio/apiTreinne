Claro! Aqui está o texto todo em inglês em um único bloco para você copiar:

<p align="center">
  <a href="http://nestjs.com/" target="blank"
    ><img
      src="https://nestjs.com/img/logo-small.svg"
      width="200"
      alt="Nest Logo"
  /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
  A progressive
  <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building
  efficient and scalable server-side applications.
</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"
    ><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version"
  /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"
    ><img
      src="https://img.shields.io/npm/l/@nestjs/core.svg"
      alt="Package License"
  /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"
    ><img
      src="https://img.shields.io/npm/dm/@nestjs/common.svg"
      alt="NPM Downloads"
  /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"
    ><img
      src="https://img.shields.io/circleci/build/github/nestjs/nest/master"
      alt="CircleCI"
  /></a>
  <a
    href="https://coveralls.io/github/nestjs/nest?branch=master"
    target="_blank"
    ><img
      src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9"
      alt="Coverage"
  /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"
    ><img
      src="https://img.shields.io/badge/discord-online-brightgreen.svg"
      alt="Discord"
  /></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"
    ><img
      src="https://opencollective.com/nest/backers/badge.svg"
      alt="Backers on Open Collective"
  /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"
    ><img
      src="https://opencollective.com/nest/sponsors/badge.svg"
      alt="Sponsors on Open Collective"
  /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"
    ><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"
  /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"
    ><img
      src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg"
      alt="Support us"
  /></a>
  <a href="https://twitter.com/nestframework" target="_blank"
    ><img
      src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"
  /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Car Rental API

Welcome to the **Car Rental API** project, an application developed for managing a car rental system. This document provides essential information for setting up and using the application.

## Prerequisites

To run this application, you need to have the following software
installed on your machine:

- **Node.js** (v18 or higher)
- **Docker** (v20.10 or
  higher)
- **Docker Compose** (v1.27 or higher)

## Cloning the Project To start,

clone the repository to your local environment:

```bash git clone
  git@github.com:ssssvio/carRentalApi.git
  cd carRentalApi
```

## Setting Up the Environment

1. **`.env` File**: Copy the `.env.example` file to `.env` and configure the required environment variables.

   ```bash
   cp .env.example .env
   ```

2. **`docker-compose.yml` Configuration**: Check and configure the `docker-compose.yml` file as needed, including passwords and other sensitive information.

## Running the Application

To start the application with Docker, run the following command:

```bash
docker-compose up --build -d
```

After the execution is complete, the API will be available within 5-7 minutes at `http://localhost:3000/api`. You can check if everything is working correctly by accessing this URL.

# API Routes

## Users - Endpoints

#### `GET /users` - Retrieves a list of all users.

- **Response:**
  - Status: 200
  - Body: Array of `UserDTO` objects

#### `GET /users/:id` - Retrieves information of a specific user by ID.

- **URL Parameters:**
  - `id` (number): User ID
- **Response:**
  - Status: 200
  - Body: `UserDTO` object

#### `POST /users` - Creates a new user.

- **Body:** `UserDTO` object
- **Response:**
  - Status: 201
  - Body: `UserDTO` object

#### `PUT /users/:id` - Updates an existing user's information.

- **URL Parameters:**
  - `id` (number): User ID
- **Body:** `UserDTO` object
- **Response:**
  - Status: 204

#### `DELETE /users/:id` - Deletes a user by ID.

- **URL Parameters:**
  - `id` (number): User ID
- **Response:**
  - Status: 204

## Auth - Endpoint

#### `POST /auth/login` - Logs in a user.

- **Body:** `LoginDto` object
- **Response:**
  - Status: 201
  - Body: JWT Token

## Cars - Endpoints

#### `GET /cars` - Retrieves a list of all available cars.

- **Response:**
  - Status: 200
  - Body: Array of `CarDTO` objects

#### `GET /cars/:id` - Retrieves information of a specific car by ID.

- **URL Parameters:**
  - `id` (number): Car ID
- **Response:**
  - Status: 200
  - Body: `CarDTO` object

#### `POST /cars` - Creates a new car.

- **Body:** `CarDTO` object
- **Response:**
  - Status: 201
  - Body: `CarDTO` object

#### `PUT /cars/:id` - Updates an existing car's information.

- **URL Parameters:**
  - `id` (number): Car ID
- **Body:** `CarDTO` object
- **Response:**
  - Status: 204

#### `DELETE /cars/:id` - Deletes a car by ID.

- **URL Parameters:**
  - `id` (number): Car ID
- **Response:**
  - Status: 204

## Notes

- If you want to download the image directly from Docker Hub:

  ```bash
  docker pull ssavio/car-rental-api
  ```

- For contributions and suggestions, feel free to open an issue or submit a pull request.

---

Thank you for using the Car Rental API! If you have any questions or need assistance, feel free to contact us.

## License

Nest is [MIT licensed](LICENSE).
