import bodyParser from 'body-parser'
import express from 'express';
import ip from 'ip';
import cors from 'cors';
import router from './router.js';
const app=express();
const ipAddr = ip.address();


app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(router);



app.listen(3000, () => {
    console.log('Serveur run : ' + ipAddr + " port : 3000");
})