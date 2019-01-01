const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const app=express();
const path=require('path');


app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'build')));


app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'build','index.html'));
});

const port=process.env.PORT || 5001;

app.listen(port,()=>{
	console.log(`server is listening on ${port}`);
});