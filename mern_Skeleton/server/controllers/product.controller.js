import Product from '../models/product.model.js'; // Import the Product model

// Get all products
export async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Add a new product
export async function addProduct(req, res) {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update a product by ID
export async function updateProduct(req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found with id " + req.params.id });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete a product by ID
export async function deleteProduct(req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found with id " + req.params.id });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Get a single product by ID
export const findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then((product) => {
      if (!product) {
        return res.status(404).send({ message: "Product not found with id " + id });
      }
      res.send(product);
    })
    .catch((err) => {
      return res.status(500).send({ message: "Error retrieving product with id " + id });
    });
};

// Delete all products
export async function deleteAllProducts(req, res) {
  try {
    const result = await Product.deleteMany({});
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No products found to delete." });
    }
    res.status(200).json({ message: `${result.deletedCount} products deleted successfully!` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Find all published products
export async function findAllPublished(req, res) {
  try {
    const products = await Product.find({ published: true });
    if (!products.length) {
      return res.status(404).json({ message: "No published products found." });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Find all products where the name contains "kw"
export async function findProductsByName(req, res) {
  try {
    const products = await Product.find({ name: { $regex: /kw/i } });
    if (!products.length) {
      return res.status(404).json({ message: "No products found with 'kw' in their name." });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
