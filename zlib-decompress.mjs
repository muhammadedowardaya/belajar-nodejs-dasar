import zlib from "zlib";
import fs from "fs/promises";

const source = await fs.readFile("zlib-compress.mjs.txt");
const result = zlib.unzipSync(source);

console.info(result.toString());
