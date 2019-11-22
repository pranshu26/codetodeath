# codetodeath
This project exposes 3 API enpoints
  1. POST /controllers/register
     Request Body:
     {
        "email": "abc@email.com",
        "password: "test",
        "name": "test user"
     }
  2. POST /controllers/authenticate
     Request Body:
     {
        "email": "abc@email.com",
        "password": "test"
     }
  3. GET /controllers/download?id=
