const express = require('express');
const app = express();
const videoRoutes = require('./routes/videos');
const commentRoutes = require('./routes/comments');

//Middleware to read the BODY of incoming requests
app.use(express.json());

app.use('/videos', videoRoutes);
app.use('/comments', commentRoutes);

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
})