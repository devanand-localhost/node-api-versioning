let products = [
  {
    id: 1,
    name: "Product A v2",
    price: 10.99,
    category: "Electronics",
    stock: 100,
  },
  { id: 2, name: "Product B v2", price: 20.5, category: "Clothing", stock: 50 },
];

const getProducts = (req, res) => {
  // Added filtering capability in v2
  const filteredProducts = req.query.category
    ? products.filter((p) => p.category === req.query.category)
    : products;

  res.json({
    version: "v2",
    products: filteredProducts,
    count: filteredProducts.length,
  });
};

const getProductById = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({
      version: "v2",
      error: "Product not found",
      code: "PRODUCT_NOT_FOUND",
    });
  }
  res.json({
    version: "v2",
    product: product,
    links: {
      self: `/products/${product.id}`,
      collection: "/products",
    },
  });
};

const createProduct = (req, res) => {
  // New in v2 - product creation
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category || "Uncategorized",
    stock: req.body.stock || 0,
  };

  products.push(newProduct);

  res.status(201).json({
    version: "v2",
    product: newProduct,
    message: "Product created successfully",
  });
};

module.exports = { getProducts, getProductById, createProduct };
