const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
//const cors = require('cors');

const { MONGOURI } = require('./config/keys');
//connection to the database
mongoose.connect(MONGOURI);
mongoose.connection.on('connected', ()=>{
    console.log('connected to the database');
});
mongoose.connection.on('error', (error)=>{
    console.log('Error',error);
});

require('./Models/upload')
// app.use(cors());
app.use(express.json());
app.use(require('./routes/upload'))

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('instaclone-frontend/build'))
    const path = require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'instaclone-frontend','build','index.html'))
    })
}
app.listen(PORT, () => {
    console.log('Server Started on Port 5000 ....');
  });