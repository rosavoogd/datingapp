![petconnectlogo](https://user-images.githubusercontent.com/60507750/83246758-e19a9680-a1a2-11ea-9701-b8fb969637a3.png)


## Job Story 

When I’m feeling alone and am looking for a new pet to keep me company, I want to be able to filter the pets based on their needs, So I can decide if I am capable of providing the pet with everything they will need to live a happy life.

## Application

## Database 

## Database structure human

| Tables   | Type          | Value             |
| -------- |:-------------:| -----------------:|
| _id      | primary-key   | auto-increment    |
| username | string        | Rosa              |
| gender   | string        | female            |
| email    | string        | rosa.voogd@hva.nl |
| age      | integer       | 22                |
| location | string        | Amsterdam         |

## Database structure animal

| Tables      | Type          | Value             |
| ----------- |:-------------:| -----------------:|
| _id         | primary-key   | auto-increment    |
| name        | string        | Bob               |
| species     | string        | Cat               |
| bio         | string        | Tabby Cat              |
| age         | integer       | 3                                 |
| environment | array         | Appartment, Garden, Farm, Balcony |
| money       | integer       | 100        |


## Installing

For this project I am using node.js and npm 
You will need to install these with the code below after cloning this project 

```
npm install 
```

### Dependencies 

* body-parser
* ejs
* expess
* express-session
* slug
* mongoDB

### DevDependensies 

* nodemon 
* eslint





https://rosavoogd.github.io/datingapp/
