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
### 3. API TO Create Task : 

#### URL: {{BASEURL}}/task
#### Request Method: POST
#### Body JSON:

```json
{
    "title" : "Task Number 1",
    "description": "Testing task number 1 description",
    "status": "6677fe08818430b3eab0aeb0"
}
```

#### Success Response:
```json
{
    "status": true,
    "data": {
        "title": "Task Number 1",
        "description": "Testing task number 1 description",
        "status": "6677fe08818430b3eab0aeb0",
        "owner": "6677f493a030ab0d4ef8b59e",
        "_id": "667a6241144d3eccdba18efa",
        "__v": 0
    }
}
```
#### Failure Response:
```json
{
    "status": false,
    "error_message": "Task validation failed: title: Path `title` is required."
}
```

### 4. API TO Update Task : 

#### URL: {{BASEURL}}/task
#### Request Method: PUT
#### Body JSON:

```json
{
    "id": "667802cf4bf83dc6c56764ab",
    "title": "19588"
}
```

#### Success Response:
```json
{
    "status": true,
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
```
#### Failure Response:
```json
{
    "status": false,
    "message": "Id is required to update task"
}
```