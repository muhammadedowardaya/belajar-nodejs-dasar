import https from "https";

const url = "https://eorhnnmcxaqmxnd.m.pipedream.net";

const request = https.request(
	url,
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	},
	(response) => {
		response.addListener("data", (data) => {
			console.info(`Reaceive data : ${data.toString()}`);
		});
	}
);

const body = JSON.stringify({
	firstName: "Edo",
	lastName: "Wardaya",
});

request.write(body);
request.end();
