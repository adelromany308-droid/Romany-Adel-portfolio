import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { portfolioData } from "../shared/portfolio.js";

const app = express();
const port = Number(process.env.PORT || 4000);
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const buildDirectory = path.join(projectRoot, "dist");

app.disable("x-powered-by");
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, service: "romany-adel-portfolio-api" });
});

app.get("/api/portfolio", (_request, response) => {
  response.set("Cache-Control", "public, max-age=300");
  response.json(portfolioData);
});

app.use(express.static(buildDirectory));

app.get("*", (_request, response) => {
  response.sendFile(path.join(buildDirectory, "index.html"));
});

app.listen(port, () => {
  console.log("Portfolio server listening on port " + port);
});
