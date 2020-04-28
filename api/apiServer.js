const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "data.json"));

const middleWares = jsonServer.defaults({
  static: "node_modules/json-server/public",
});

server.use(middleWares);

server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function (req, res, next) {
  setTimeout(next, 0);
});

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post("/products/", function (req, res, next) {
  const error = validateProduct(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function validateProduct(course) {
  if (!product.name) return "Name is required.";
  if (!product.price) return "Price is required.";
  return "";
}
