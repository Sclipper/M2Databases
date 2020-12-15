# M2Databases

## Prerequisites:
| Technology | Recommended version |
| ------ | ------ |
| Node.js | 14.15.1 LTS |
| Yarn | 1.22.5 |

> Note: "yarn" dependency management for Windows or other OSes can be installed from here: https://classic.yarnpkg.com/en/docs/install/#windows-stable


## To install and run the Web Server:
1. Clone the repository and navigate into its root folder
2. Call `yarn` to install all dependencies:
    ```
    yarn
    ```
3. Create `.env` file in the root directory of the project and fill it with your own correct values for when establishing connection to MySQL Database, for example:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=root
    ```
4. Call `yarn start` to start the Web Server. It will listen on port `8080`:
    ```
    yarn start
    ```
5. Use Postman or any other mean of sending HTTP requests to the Web Server, using the exposed endpoints.

## Endpoints

> Note: The endpoints are still under development. Use some of the following endpoints for testing purposes.

> Note: Change the `host name` with its proper representation. When used locally, you can use the `localhost` domain name.

| Request | Endpoint | Body (x-www-form-urlencoded) | Description
| ------ | ------ | ------ | ------ |
| GET | localhost:8080/product/show |  | This will return a list of all products. Initially there are 500 products stored in the Database. |
| POST | localhost:8080/product/search | key="word", value="lamp" | This will give back a Product that matches specific search string in its name. To search for lamps for example, use the value shown here.|
| POST | localhost:8080/credit_card/store | key="userId", value="1" | This request will store a new Credit Card for the selected User, providing userId |
|      |                                  | key="cardholderName", value="Test Name" | |
|      |                                  | key="expiryMonth", value="11" | |
|      |                                  | key="expiryYear", value="22" | |
|      |                                  | key="securityCode", value="555" | |
| GET | localhost:8080/user/show | | Test point that does not return data from the Database |
