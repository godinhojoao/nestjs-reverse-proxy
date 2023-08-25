# Nestjs-reverse-proxy

- Welcome to the documentation for the nestjs-reverse-proxy API built with NestJS. This guide will walk you through the steps to run, build, test, and debug the API.
- This project was developed to assist in the migration of legacy APIs. If you possess an older API and intend to upgrade to a newer version, you can utilize this reverse-proxy to redirect requests from the existing API to the legacy system. This allows you to develop the new code patiently.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the API](#running-the-api)
- [Docker commands](#docker-commands)
- [Testing](#testing)
  - [Unit Tests](#unit-tests)
  - [End-to-End Tests](#end-to-end-tests)
  - [Code Coverage](#code-coverage)
- [Linting and Formatting](#linting-and-formatting)
- [Debugging](#debugging)
- [Contributing](#contributing)

## Prerequisites

Before you begin, make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd nestjs-reverse-proxy
   ```

2. Install dependencies:

   ```bash
   nvm i 18.17.1
   nvm use
   npm install
   ```

## Running the API

To start the API server, run the following command:

```bash
npm start
```

This will start the NestJS server in normal mode. If you want to start the server in development mode with auto-reloading on code changes, use:

```bash
npm run start:dev
```

For production deployment, you can use:

```bash
npm run build
npm run start:prod
```

## Docker commands

- To build the API image with docker: `docker build -t nestjs-reverse-proxy .`
- To see the existent images: `docker images`
- To delete existent images: `docker rmi nestjs-reverse-proxy`
- To run your docker container for this image: `docker run -d --name nestjs-reverse-proxy-container -p 3000:3000 nestjs-reverse-proxy`
- To see running containers: `docker ps`
- To see container's logs: `docker logs nestjs-reverse-proxy-container`
- To stop your container: `docker stop nestjs-reverse-proxy-container`
- To delete a stopped container: `docker rm nestjs-reverse-proxy-container`

## Testing

### Unit Tests

To run unit tests, execute:

```bash
npm test
```

### End-to-End Tests

To run end-to-end tests, execute:

```bash
npm run test:e2e
```

### Code Coverage

To generate code coverage reports, run:

```bash
npm run test:cov
```

The coverage reports will be available in the `coverage` directory.

## Linting and Formatting

To lint and format your code, use the following command:

```bash
npm run lint
```

To automatically fix linting and formatting issues, run:

```bash
npm run format
```

This will run the tests in debug mode, allowing you to attach a debugger.

## Contributing

Before creating a pull request, make sure to:

1. Write tests for any new functionality.
2. Run the linting and formatting checks using `npm run lint` and `npm run format`.
