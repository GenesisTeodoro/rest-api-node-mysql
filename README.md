# rest-api-node-mysql
Inventory REST API with CRUD functions using NodeJS, Express and MySQL


## Installation
Use the package manager [npm](https://www.npmjs.com/get-npm) to install node modules.

```bash
npm install 
```

## Create Database
First, Install [mysql](https://dev.mysql.com/downloads/) in your machine 

Create Database in your MySQL Server
```bash
CREATE DATABASE IF NOT EXISTS inventory;
```

## Create Item Table
Create Item Table

```bash
CREATE TABLE IF NOT EXISTS `items` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  qty int(11) NOT NULL,
  amount DECIMAL(50,2) NOT NULL
);
```

## Postman
Install [Postman](https://www.postman.com/downloads/) to perform CRUD functions and HTTP methods
