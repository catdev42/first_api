const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

const PORT = 8000;

const rappers = {
	"21 savage": { age: 29, birthName: "Shéyaa Bin Abraham-Joseph", birthLocation: "London, England" },

	"chance the rapper": { age: 28, birthName: "Chancelor Bennet", birthLocation: "Chicago, Illinois" },

	dylan: { age: 28, birthName: "Dylan", birthLocation: "Dylan" },
};

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});
app.get("/api", (request, response) => {
	response.json(rappers);
});

app.get("/api/:rapperName", (request, response) => {
	console.log(request.params.rapperName);
	const rapper = request.params.rapperName.toLowerCase();
	if (rappers[rapper]) response.json(rappers[rapper]);
	else response.json(rappers["dylan"]);
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on PORT ${PORT}, you better go catch it`);
});
