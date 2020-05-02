var faker = require("faker");

var database = { products: [] };

for (var i = 1; i <= 50; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    longDescription: faker.lorem.paragraphs(),
    color: faker.commerce.color(),
    material: faker.commerce.productMaterial(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product&sig=" + i,
    quantity: faker.random.number(),
  });
}

console.log(JSON.stringify(database));
