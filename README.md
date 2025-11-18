# Lab 6.2 - Promises and Error Handling Challenge

# Author
- Dewan Mahmud (Rocky)
- Per Scholas Software Engineering | 2025
- GitHub: https://github.com/DewanTechUS
- Portfolio: https://dewantech.com

# Overview
## This project is my completed work for Lab 2: Promises and Error Handling.
## The goal of the lab was to simulate a small e-commerce dashboard using:
-	JavaScript Promises
-	Asynchronous operations
-	Promise chaining
-	Custom error classes
-	Error handling (.catch, .finally)

# The system includes:
-	A simulated product catalog API
-	A simulated product reviews API
-	A simulated sales report API
-	Random API failures using Math.random()
-	Promise chaining to connect all three API calls

# What I Learned
## In this lab, I practiced:
-	Creating multiple asynchronous functions using Promises
-	Using .then() to chain API calls in sequence
-	Handling failures using .catch()
-	Using .finally() for cleanup
-	Creating and using custom error classes (NetworkError, DataError)
-	Organizing code across multiple TypeScript files
-	Compiling and running TypeScript-based projects

This lab taught me a lot about how real-world API workflows work with delays and errors, and how Promise chains help control the flow of async operations.

# Debugging Experience
## The lab itself should take around 1–1.5 hours, but I spent extra time making sure I fully understood how:
•	Promises resolve and reject
•	Errors flow through a Promise chain
•	TypeScript compiles into JavaScript
•	Node executes compiled files
•	Custom errors behave differently from normal errors

# Issues I Fixed
## I solved several issues while completing this project:
-	Wrong tsconfig settings
-	Missing dist folder before running the app
-	Incorrect imports/exports between files
-	Using instanceof incorrectly
-	Forgetting to return Promises inside .then()
-	Confusion about the .finally() return type warning

Even though I struggled at times, these debugging moments helped me understand Promise behavior deeply and made me more confident.

# Special Thanks
- Special thanks to my instructor for explaining asynchronous programming and Promises in a very simple and clear way. Their teaching made it easier to understand chaining, delays, and custom error handling.

- I also want to thank my classmates who completed the project during class and supported each other. Even though some finished quickly, I completed mine faster than my earlier labs because I gained a lot of experience from previous exercises. Each lab has helped me improve my skills, practice more, and build stronger confidence in JavaScript and TypeScript.

# Project Structure

# How to Run the Project
## Install dependencies
- npm install
## Compile TypeScript
- npx tsc
## Run the compiled project
- node dist/index.js

# Features Implemented
-	Simulated product catalog
-	Simulated product reviews
-	Simulated sales report
-	Custom error classes (NetworkError, DataError)
-	Randomized API failures
-	Promise chaining
-	Error handling with .catch()
-	Cleanup message with .finally()

# Reflection
## This lab helped me strengthen my understanding of:
-	How Promises work behind the scenes
-	How asynchronous workflows should be structured
-	How to identify different error types using custom classes
-	How .catch() handles errors in a long chain
- 	How to organize TypeScript code into clean modules

Completing this lab increased my confidence in handling real-world async code and improved my ability to debug async behavior.

