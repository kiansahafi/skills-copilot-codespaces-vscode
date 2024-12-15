//create web server
const express = require('express');
const app = express();

//create a route
app.get('/comments', (req, res) => {
    //send data to client
    res.send('comments');
});

//listen to port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});