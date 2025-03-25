const products = [
  { id: 1, name: "Product A v1", price: 10.99 },
  { id: 2, name: "Product B v1", price: 20.5 },
];

const getProducts = (req, res) => {
  res.json({
    version: "v1",
    products: products,
  });
};

const getProductById = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json({
    version: "v1",
    product: product,
  });
};

module.exports = { getProducts, getProductById };
