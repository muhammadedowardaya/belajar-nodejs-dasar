import process from "process";

const buffer = Buffer.from("Muhammad Edo Wardaya", "utf8");

console.info(buffer);
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("TXVoYW1tYWQgRWRvIFdhcmRheWE=", "base64");
console.info(bufferBase64.toString("utf8"));
