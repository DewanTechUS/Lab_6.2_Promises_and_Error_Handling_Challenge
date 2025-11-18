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