// Strictly typing your variables
// : number -> typing myName (Type annotation)
// let number: number = 100

// Type Inference (typescript is itself able understamd the type from the value)
let number = 100

number = 100

console.log(number)

// We need type annotation here
let myCountry: string

myCountry = 'Nepal'
// myCountry = 100 -> ERROR

const numbers: number[] = [1, 2, 3, 4, 100]

interface IProgrammingLanguage {
  name: string
  library: string
}

const programmingLanguage: IProgrammingLanguage = {
  name: 'JavaScript',
  library: 'React',
}

// programmingLanguage.library
let country: 'Nepal' | 'India' | 'USA'

country = 'USA'
