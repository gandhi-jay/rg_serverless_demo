const mongoose = require('mongoose');
const bluebird = require('bluebird');
const validator = require('validator');
const sender = require('./webhook/index');

const FeedbackModel = require('./model/Feedback')

mongoose.Promise = bluebird;

const mongoString = ``; // MongoDB Url

module.exports.feedback = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;

  data = JSON.parse(event.body);

  feedback = new FeedbackModel({
    feedback: data.feedback,
    rating: data.rating
  })

  errors = feedback.validateSync();

  if (errors) {
    console.log(errors)
    callback(errors)
  }

  db.once('open', () => {
    feedback
      .save()
      .then(() => {
        sender(data.feedback,data.rating)
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            body: JSON.parse(event.body)
          })
        });
      }).catch((err) => {
        callback(err)
      }).finally(() => {
        db.close();
      })
  })
}
