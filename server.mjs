import net from "net";
import process from "process";

const server = net.createServer((client) => {
	console.info("Connected");

	client.addListener("data", (data) => {
		client.write(`Halo ${data}`);
	});
});

server.listen(3000, "localhost");

process.addListener("uncaughtException", () => {
	server.close();
	console.info("Server disconnected");
});
