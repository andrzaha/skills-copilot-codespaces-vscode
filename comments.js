// Create web server
// Start the server
// Use the express module
// Create an instance of express
// Create a route for GET request to /comments
// Send back some comments
// Create a route for POST request to /comments
// Get the body from the request
// Send back a message
// Start the server
// Listen on port 3000
const express = require('express');
const app = express();

const comments = [
  {username: 'Tammy', comment: 'lololol'},
  {username: 'FishBoi', comment: 'I am a fish'},
  {username: 'SkaterBoi', comment: 'I am a skater'},
  {username: 'RunnerBoi', comment: 'I am a runner'}
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('POST request to the homepage');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Create a route for POST request to /comments
// Get the body from the request
// Send back a message
// Start the server
// Listen on port 3000