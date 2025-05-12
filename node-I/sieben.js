import http from "http";
import routes from "./routes.js";

const server = http.createServer(routes);

server.listen(3301, () => {
  console.log("Server listening on http://localhost:3301");
});