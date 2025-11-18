import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";

console.log("Starting fake API requests Please wait.");

fetchProductCatalog()
  .then((products) => {
    console.log("Product catalog:", products);
    return fetchProductReviews(products[0].id);
  });
