// Constant Time Complexity O(1)
const start = performance.now()
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100]
console.log(myArray[19])
const end = performance.now()
console.log(`${end - start}`)
