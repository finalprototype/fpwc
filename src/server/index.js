const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server running at http://127.0.0.1:%s', port);
});

process.on("SIGTERM", () => {
  server.close(() => {
    process.exit(0);
  });
});
