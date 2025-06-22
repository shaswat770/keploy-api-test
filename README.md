
This repository contains my solution for the Keploy API Fellowship Session 3 assignment.

## Project Overview

- Built a custom API server using Node.js and Express.
- Integrated MongoDB for data persistence.
- Implemented tests using Jest and Supertest.
- Used `mongodb-memory-server` for running tests with an in-memory MongoDB instance.

- ## Test Coverage

![Test Coverage](screenshot/coverage.png)


## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/shaswat770/keploy-api-test.git
   cd keploy-api-test
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests:

   ```bash
   npm test
   ```

## Tests Included

* API endpoint tests (`tests/api.test.js`)
* Business logic tests (`tests/logic.test.js`)

## Notes

* Tests use `mongodb-memory-server` to avoid the need for an actual MongoDB server during testing.
* Make sure you have Node.js (v14 or higher) and npm installed on your machine.

---

Thank you for the opportunity to participate!

---

*Created by Shaswat Kumar Jha*

`
