import os from "os";
import process from "process";
import cluster from "cluster";
import http from "http";

if (cluster.isPrimary) {
	// jalankan worker
	console.info(`Primary : ${process.pid}`);
	for (let i = 0; i < os.cpus().length; i++) {
		cluster.fork();
	}

	cluster.addListener("exit", (worker) => {
		console.info(`Worker : ${worker.id} is exit`);

		// jalankan worker baru jika ada yang mati
		cluster.fork();
	});
}

if (cluster.isWorker) {
	const server = http.createServer((request, response) => {
		response.write(`Response from process ${process.pid}`);
		response.end();

		// tutup agar ada notifikasi worker exit
		process.exit();
	});

	server.listen(3000);
}
