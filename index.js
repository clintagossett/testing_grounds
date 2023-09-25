const express = require('express');
const app = express();
// serve up production assets
app.use(express.static('client/build'));
// let the react app to handle any unknown routes 

app.get('/share', function(req, res) {
    // Add your code here
    res.json({success: 'get call (1) succeed!', url: req.url});
  });

app.get('/share/:id', function(req, res) {
  // Add your code here
  res.json({success: 'get call (2) succeed!', url: req.url});
});
// serve up the index.html if express does'nt recognize the route
const path = require('path');
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);