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
