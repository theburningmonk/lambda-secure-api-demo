'use strict';

const response = {
  statusCode: 200,
  body: JSON.stringify({ message: "chaos is a ladder" })
};

module.exports.handler = (event, context, callback) => {
  callback(null, response);
};