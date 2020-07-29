const express = require("express");
const next = require("next");

const PORT = parseInt(process.env.PORT) || 3000;
const isDev = process.env.NODE_ENV === "development";
console.log("isDev :", isDev);
const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  console.log("dirname :", express.static(__dirname));
  // server.use(express.static(__dirname), { dotfiles: "allow" });

  server.get(
    "/.well-known/acme-challenge/4o6Vu2hlv3paSsA3fwSKwz4bUr4tJy5VYlnQ9jBMunw",
    (req, res) => {
      res
        .status(200)
        .set("content-type", "text/plain")
        .send(
          "4o6Vu2hlv3paSsA3fwSKwz4bUr4tJy5VYlnQ9jBMunw.Fh5k9QYsWVY0V0N4E3XQtX_szVvx25QHhCQbAQKKLHE"
        );
    }
  );

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
