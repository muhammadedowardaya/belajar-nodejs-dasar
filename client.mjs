import net from "net";
import process from "process";

const client = net.createConnection({
	port: 3000,
	host: "localhost",
});

client.addListener("data", (data) => {
	console.info(`Menerima data : ${data}`);
});

process.addListener("disconnect", () => {
	client.closed;
	console.info("client disconnected");
});

if (process.argv[2] != "") {
	client.write(process.argv[2]);
	client.closed;
}
