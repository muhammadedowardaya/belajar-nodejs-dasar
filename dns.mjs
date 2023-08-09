import dns from "dns/promises";

const address = await dns.lookup("kelas.programmerzamannow.com");

console.info(dns.getServers());
console.info(address);
