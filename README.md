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
