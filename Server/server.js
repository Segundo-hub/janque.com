
//Libraries
const express = require("express");
const path = require("path");

//EXPRESS APP
const app = express();

app.set('port', process.env.PORT || 8080)

//Absolute Paths
const pathResolve = path.resolve(`${__dirname}/../`);
console.log(pathResolve)

app.use(express.static(path.join(pathResolve)));

//GETTERS
app.get("/", (input, print) => {
 	print.sendFile(path.join(__dirname + '/../index.html'));	
	console.log('runing in port', app.get('port'));
})

app.get("/history", (input, print) => {
	print.status(200).sendFile(path.join(__dirname + '/../Public/history.html'));
	console.log('send history file im port', app.get('port'))
})

app.get("*", (input, print) => {
	print.status(404).sendFile(path.join(__dirname + '/../Public/404.html'))
	console.log("error", 404)
})


//Server Port
app.listen(app.get('port'), ()=> {
	console.log(`Your app listen in port ${app.get('port')}`);
});