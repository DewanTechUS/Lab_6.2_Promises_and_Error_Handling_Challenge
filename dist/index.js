"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_1 = require("./apiSimulator");
console.log("Starting fake API requests please wait.");
// Chained API calls with proper error handling
// Implement Error Handling Using Promises:
// https://ps-lms.vercel.app/curriculum/se/413/lab-2#:~:text=Implement%20Error%20Handling%20Using%20Promises%3A
// follow the lesson // chaining the promises
(0, apiSimulator_1.fetchProductCatalog)()
    .then((products) => {
    console.log("Product catalogs:", products);
    return (0, apiSimulator_1.fetchProductReviews)(products[0].id);
})
    .then((reviews) => {
    console.log("Product reviews:", reviews);
    return (0, apiSimulator_1.fetchSalesReport)();
})
    .then((salesReport) => {
    console.log("Sales reports:", salesReport);
})
    .catch((error) => {
    // network error handling as per lesson
    if (error instanceof apiSimulator_1.NetworkError) {
        console.error("Simulated Network error:", error.message);
    }
    else if (error instanceof apiSimulator_1.DataError) {
        console.error("Simulated Data error:", error.message);
    }
    else {
        console.error("Simulated Unknown error:", error);
    }
})
    .finally(() => {
    console.log("All Simulated API calls attempted");
});
