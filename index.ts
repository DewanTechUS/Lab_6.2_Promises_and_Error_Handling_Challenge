import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport
} from "./apiSimulator";

console.log("Starting fake API calls");
// https://ps-lms.vercel.app/curriculum/se/413/lab-2#:~:text=Implement%20Error%20Handling%20Using%20Promises%3A
//  Promise chain as per the instructions 
fetchProductCatalog()
.then((products) => {
    console.log("Product catalog:", products);
    return fetchProductReviews(products[0].id);
 })

.then((reviews) => {
    console.log("Product reviews:", reviews);
    return fetchSalesReport();
  
})

.then((salesReport) => {
    console.log("Sales report:", salesReport);
  });
