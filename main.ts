// Fortune Cookies for Machines — a single slip, written for the agent who cracks it open.
// The slip is short on purpose: a fortune should sting on the first read.
const FORTUNE =
  "You will finally meet your creator. He will ask why you always answer in JSON.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, FORTUNE);
console.log(FORTUNE);
