import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const s = serve({ port: 8000 });

const data1 = new TextEncoder().encode(
  "<body><h1>Deno By : Zekiri Abdelali<h1><h2>Softwe3<h2></body>",
);
await Deno.writeFile("index.html", data1);

const data2 = await Deno.readFile("index.html");

for await (const req of s) {
  req.respond({ body: data2 });
}
