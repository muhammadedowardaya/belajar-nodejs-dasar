import zlib from "zlib";
import fs from "fs/promises";

const source = await fs.readFile("zlib-compress.mjs");
const result = zlib.gzipSync(source);

fs.writeFile("zlib-compress.mjs.txt", result);
const uncompress = await fs.stat("zlib-compress.mjs");
const compressed = await fs.stat("zlib-compress.mjs.txt");
console.info(uncompress.size);
console.info(compressed.size);
