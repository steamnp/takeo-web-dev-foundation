// Exponential Time Complexity O(2^n)
const start = performance.now()
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]

function generateSubsets(array) {
  if (array.length === 0) {
    return [[]]
  }
  const firstElement = array[0]
  const remainingElements = array.slice(1)
  const subsetsWithoutFirst = generateSubsets(remainingElements)
  const subsetsWithFirst = subsetsWithoutFirst.map((subset) => [firstElement, ...subset])
  return subsetsWithoutFirst.concat(subsetsWithFirst)
}

generateSubsets(myArray)

const end = performance.now()
console.log(`${end - start}`)
