const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "data.json"));

const middleWares = jsonServer.defaults({
  static: "node_modules/json-server/public",
});

server.use(middleWares);

server.use(jsonServer.bodyParser);

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

server.post("/cart/", function (req, res, next) {
  const error = validateCartItem(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function validateProduct(product) {
  if (!product.name) return "Name is required.";
  if (!product.price) return "Price is required.";
  return "";
}

function validateCartItem(product) {
  if (!product.name) return "Name is required.";
  if (!product.price) return "Price is required.";
  return "";
}
