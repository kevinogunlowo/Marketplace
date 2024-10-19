import { Router } from 'express';
const router = Router();

// Importing individual functions from product.controller.js
import { 
  getAllProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct, 
  deleteAllProducts, 
  findOne, 
  findAllPublished,
  findProductsByName 
} from '../controllers/product.controller.js'; // Adjust the path to point to the correct location

// Define routes
router.get('/products', getAllProducts); // Get all products
router.post('/products', addProduct); // Add a new product
router.get('/products/:id', findOne); // Get a product by ID
router.put('/products/:id', updateProduct); // Update a product by ID
router.delete('/products/:id', deleteProduct); // Delete a product by ID
router.delete('/products', deleteAllProducts); // Delete all products
router.get('/products/published', findAllPublished); // Find all published products

// Export router
export default router;
