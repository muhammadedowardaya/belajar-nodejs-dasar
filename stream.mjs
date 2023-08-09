import fs from "fs";

const writer = fs.createWriteStream("output/target.log");
writer.write("Muhammad\n");
writer.write("Edo\n");
writer.write("wardaya\n");
writer.end();

const reader = fs.createReadStream("output/target.log");
reader.addListener("data", (data) => {
	console.info(data.toString());
});
