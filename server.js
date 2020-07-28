const express = require("express");
const next = require("next");

const PORT = parseInt(process.env.PORT) || 3000;
const isDev = process.env.NODE_ENV === "development";
console.log("isDev :", isDev);
const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
