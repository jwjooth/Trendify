/**
 * Service barrel — provides the short names imported across hooks/pages:
 *   getAllProducts, getProductById, getCategories, getTestimonials, getFaqs
 */
export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./products";

export {
  getAllCategories,
  getCategoryById,
  putCategory,
  deleteCategory,
  getCategories,
} from "./categories";

export {
  getAllFaqs,
  getFaqsById,
  createFaq,
  updateFaq,
  deleteFaq,
  getFaqs,
} from "./faqs";

export {
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  putTestimonial,
  deleteTestimonial,
  getTestimonials,
} from "./testimonial";

export { getAllUsers, putUser, deleteUser } from "./user";
export { login, register } from "./auth";
