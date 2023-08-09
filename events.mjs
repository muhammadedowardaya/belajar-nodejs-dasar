import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", (name) => {
	console.info(`Helo ${name}`);
});

emitter.emit("hello", "Edo");
