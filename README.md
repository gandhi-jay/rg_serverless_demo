# Serverless MongoDB Rest API with Mongoose and Bluebird Promises

This example demonstrate how to use a MongoDB database with aws and serverless.

Using Mongoose ODM and Bluebird for Promises.

## Use Cases

- NoSQL CRUD API

## Setup

```
npm install
serverless deploy
```

## Usage

In `handler.js` update the `mongoString` with your mongoDB url.

*Feedback*

```bash
curl -XPOST -H "Content-type: application/json" -d '{
   "rating" : 3,
   "feedback": "Serverless is awesome"
}' 'https://asdwe32445.execute-api.us-east-1.amazonaws.com/dev/user/'
```
```json
{"body": {"rating" : 3,
"feedback": "Serverless is awesome"}}
```
