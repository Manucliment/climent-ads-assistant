#!/usr/bin/env node
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(__dirname, "public");
const fixturePath = path.join(__dirname, "fixtures", "climent-ads-assistant-demo.json");
const port = Number(process.env.PORT || 4177);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function send(response, status, body, headers = {}) {
  response.writeHead(status, {
    "cache-control": "no-store",
    "x-demo-mode": "true",
    ...headers
  });
  response.end(body);
}

async function readPublicFile(fileName) {
  const fullPath = path.resolve(publicDir, fileName);
  if (!fullPath.startsWith(publicDir + path.sep) && fullPath !== path.join(publicDir, "index.html")) {
    return null;
  }
  return fs.readFile(fullPath);
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
    if (url.pathname === "/health" || url.pathname === "/auth/meta/health") {
      return send(response, 200, JSON.stringify({
        ok: true,
        mode: "oss_demo",
        providerCalls: false,
        providerWrites: false,
        adsWrites: false,
        oauthExecuted: false
      }, null, 2), { "content-type": contentTypes[".json"] });
    }
    if (url.pathname === "/demo/fixture.json") {
      return send(response, 200, await fs.readFile(fixturePath), { "content-type": contentTypes[".json"] });
    }
    const routeToIndex = url.pathname === "/" || url.pathname === "/auth/meta/internal/ui-v3";
    const fileName = routeToIndex ? "index.html" : url.pathname.replace(/^\/+/, "");
    const file = await readPublicFile(fileName);
    if (!file) return send(response, 404, "Not found\n", { "content-type": "text/plain; charset=utf-8" });
    const ext = path.extname(fileName);
    return send(response, 200, file, { "content-type": contentTypes[ext] || "application/octet-stream" });
  } catch (error) {
    return send(response, 500, JSON.stringify({ ok: false, reason: "demo_server_error" }), { "content-type": contentTypes[".json"] });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Climent Ads Assistant demo running at http://127.0.0.1:${port}/auth/meta/internal/ui-v3`);
  console.log(`Project root: ${root}`);
});
