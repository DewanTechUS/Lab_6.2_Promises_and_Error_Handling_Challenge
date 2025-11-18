import { 
  fetchProductCatalog, 
  fetchProductReviews, 
  fetchSalesReport, 
  NetworkError, 
  DataError 
} from "./apiSimulator";

console.log("Starting fake API requests please wait.");

// Chained API calls with proper error handling
// Implement Error Handling Using Promises:
// https://ps-lms.vercel.app/curriculum/se/413/lab-2#:~:text=Implement%20Error%20Handling%20Using%20Promises%3A
// follow the lesson // chaining the promises
fetchProductCatalog()
  .then((products) => {
    console.log("Product catalogs:", products);
    return fetchProductReviews(products[0].id);
  })
  .then((reviews) => {
    console.log("Product reviews:", reviews);
    return fetchSalesReport();
  

})
  .then((salesReport) => {
    console.log("Sales reports:", salesReport);
  

})
  .catch((error) => {
    // network error handling as per lesson
  if (error instanceof NetworkError) 
    
    {
    console.error("Simulated Network error:", error.message);

  } 
  
  else if (error instanceof DataError) {
    console.error("Simulated Data error:", error.message);
  } 
  else 
    
    {
    console.error("Simulated Unknown error:", error);
  }
})

.finally(() => 
    
{
  console.log("All Simulated API calls attempted");
});
