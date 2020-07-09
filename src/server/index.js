const app = require("./app");

const server = app.listen(
	7000,
	() => console.info("Server running on port 7000")
);

process.on("SIGTERM", () => {
  server.close(() => {
    process.exit(0);
  });
});
