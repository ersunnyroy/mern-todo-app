#  To-Do List App MERN Stack
To-Do List App using MERN Stack

## API'S Documentation 

### 1. API TO Register as User : 

#### URL: {{BASEURL}}/register
#### Request Method: POST
#### Body JSON:

```json
{
    "firstname":"Sunny",
    "lastname":"Roy",
    "email":"sunnyroy@yopmail.com",
    "password":"password",
    "gender":"Male"
}
```

#### Success Response:
```json
{
    "status": true,
    "message": "Your are successfully registered"
}
```
#### Failure Response:
```json
{
    "status": false,
    "error_message": "E11000 duplicate key error collection: todo-mern.users index: email_1 dup key: { email: \"sunnyroy@yopmail.com\" }"
}
```

### 2. API TO Login as User : 

#### URL: {{BASEURL}}/login
#### Request Method: POST
#### Body JSON:

```json
{
    "email":"sunnyroy@yopmail.com",
    "password":"password"
}
```

#### Success Response:
```json
{
    "status": true,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NzdmNDkzYTAzMGFiMGQ0ZWY4YjU5ZSIsImVtYWlsIjoic3Vubnlyb3lAeW9wbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJTdW5ueSIsImxhc3RuYW1lIjoiUm95IiwiZnVsbG5hbWUiOiJTdW5ueSBSb3kifSwiaWF0IjoxNzE5Mjk1MTkyLCJleHAiOjE3MTkyOTY5OTJ9.NGyhBcu3pEQyIfEq6Fh9XEoVU_ucoUiZtqTXyXnVOFw"
}
```
#### Failure Response:
```json
{
    "status": false,
    "message": "Invalid Credentials"
}
```
