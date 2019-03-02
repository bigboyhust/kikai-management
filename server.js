const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
app.get('/',function(req,res){
  res.send('hi there');
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));