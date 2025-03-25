# Node.js API Versioning Demo

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![License](https://img.shields.io/badge/License-MIT-blue)

## Overview

This project demonstrates multiple API versioning strategies in Node.js with Express, showcasing different approaches to managing API versions effectively.

## Features

- Multiple API versioning strategies:
  - URL Path Versioning
  - Header Versioning
  - Query Parameter Versioning
- Comprehensive examples with Users and Products APIs
- Demonstrating progressive API enhancement between versions

## Prerequisites

- Node.js (v18.x)
- npm (Node Package Manager)

## Versioning Strategies

### 1. URL Path Versioning

Example requests:

```bash
# Version 1
curl http://localhost:3000/v1/users
curl http://localhost:3000/v1/users/1
curl http://localhost:3000/v1/products
curl http://localhost:3000/v1/products/1

# Version 2
curl http://localhost:3000/v2/users
curl http://localhost:3000/v2/users/1
curl http://localhost:3000/v2/products
curl http://localhost:3000/v2/products/1
```

### 2. Header Versioning

Example requests:

```bash
# Version 1
curl -H "Accept: application/json; version=1" http://localhost:3000/users
curl -H "Accept: application/json; version=1" http://localhost:3000/users/1
curl -H "Accept: application/json; version=1" http://localhost:3000/products
curl -H "Accept: application/json; version=1" http://localhost:3000/products/1

# Version 2
curl -H "Accept: application/json; version=2" http://localhost:3000/users
curl -H "Accept: application/json; version=2" http://localhost:3000/users/1
curl -H "Accept: application/json; version=2" http://localhost:3000/products
curl -H "Accept: application/json; version=2" http://localhost:3000/products/1
```

### 3. Query Parameter Versioning

Example requests:

```bash
# Version 1
curl http://localhost:3000/users?version=1
curl http://localhost:3000/users/1?version=1
curl http://localhost:3000/products?version=1
curl http://localhost:3000/products/1?version=1

# Version 2
curl http://localhost:3000/users?version=2
curl http://localhost:3000/users/1?version=2
curl http://localhost:3000/products?version=2
curl http://localhost:3000/products/1?version=2
```

## Response Examples

### Version 1 Response

```json
{
  "version": "v1",
  "users": [
    { "id": 1, "name": "Ram Rathod v1" },
    { "id": 2, "name": "Shyam Sharma v1" }
  ]
}
```

### Version 2 Response

```json
{
  "version": "v2",
  "users": [
    { "id": 1, "name": "Ram Rathod v2", "email": "Ram@example.com" },
    { "id": 2, "name": "Shyam Sharma v2", "email": "Shyam@example.com" }
  ]
}
```
