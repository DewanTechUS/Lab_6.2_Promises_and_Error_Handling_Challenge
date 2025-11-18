// https://ps-lms.vercel.app/curriculum/se/413/lab-2#:~:text=Instructions-,Part%201%3A%20Set%20Up%20Your%20Project,-Create%20a%20New
// Part 1: Set Up Your Project as per the instructions in the link above.
// follow the lesson
export const fakeApiCall = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.8; // 80% chance of success https://ps-lms.vercel.app/curriculum/se/413/lab-2#:~:text=Example%20Code%20for%20fetchProductCatalog()

      if (success) {
        resolve("I made a fake API call succeeded");
      } else {
        reject("I made a fake API call failed");
      }
    }, 1000); // it is simulate 1 second delay // we can do 10 * 1000 to simulate 10 seconds delay

  });
}
// https://ps-lms.vercel.app/curriculum/se/413/lab-2#:~:text=an%20error%20message.-,Part%202%3A%20Implement%20API%20Simulation%20Functions,-Simulate%20Asynchronous%20API
// Part 2: Implement API Simulation Functions as per the instructions in the link above.
// follow the lesson

export const fetchProductCatalog = () => {
return new Promise<{ id: number; name: string; price: number }[]>((resolve, reject) => {
setTimeout(() => {
const ok = Math.random() < 0.8;

if (ok) {
resolve([
{ id: 1, name: "Rocky's Laptop", price: 1200 }, // i tryng to add $ sign but it give error

{ id: 2, name: "Rocky's Headphones", price: 200 } // i tryng to add $ sign but it give error
     ]);
      } 

      else {
     reject("I simulated a Failed to fetch product catalog");
      }
    }, 1000);
  });
};
// https://ps-lms.vercel.app/curriculum/se/413/lab-2#:~:text=Continue%20with%20fetchProductReviews()
// Part 3: Continue with fetchProductReviews() as per the instructions in the link above.
// follow the lesson
// Simulate fetching product reviews
export const fetchProductReviews = (productId: number) => {
return new Promise<{ productId: number; review: string }[]>((resolve, reject) => {
setTimeout(() => {
const ok = Math.random() < 0.8; // following lesson example

 if (ok) {
 resolve([

{ productId, review: "Rocky's review: Good product" },
{ productId, review: "Rocky's review: Very Bad item" }
   ]);
 } 
      
    else {
        reject(`Failed to fetch reviews for product ID ${productId}`); // added productId in the error message for clarity
      }

    }, 2000); // 2second delay for fetching reviews
  });
};
// https://ps-lms.vercel.app/curriculum/se/413/lab-2#:~:text=ID%20%24%7BproductId%7D%22.-,fetchSalesReport()%3A,-Simulates%20fetching%20a
// Part 4: fetchSalesReport() as per the instructions in the link above.
// follow the lesson
// fetching a sales report
export const fetchSalesReport = () => {
  return new Promise<{ 

    totalSales: number;  
    unitsSold: number; 
    averagePrice: number 

}>
    
    ((resolve, reject) => {
    setTimeout(() => {
    
        const ok = Math.random() < 0.8;

      if (ok) {
        resolve({
    
        totalSales: 16500,
         unitsSold: 375,
         averagePrice: 44
    
        });


      } else 
        {
    
        reject("Failed to fetch sales report");
      }
    }, 1000); // 1 second delay
  });
};

