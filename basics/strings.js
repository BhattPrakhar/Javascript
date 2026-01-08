const name =" prakhar  "
const repocount = 100

console.log(name + repocount + " this can also be added")

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const newName = new String ("Prakhar")
console.log(newName[0])
console.log(newName.__proto__)
          
console.log(newName.length)
console.log(newName.toUpperCase())
console.log(newName.charAt(2))
console.log(newName.indexOf('k'))

const newString = newName.substring(0,4) // we cannot give negative values in substring , it always starts with 0 index
console.log(newString)
const Another = newName.slice(-6,4)
console.log(Another)

const AnotherNewName = "    Prakhar"
console.log(AnotherNewName)
console.log(AnotherNewName.trim())// removes spaces from start and end    

const url = "https://www.instagram.com/_tushar%20700759/"
console.log(url)
console.log(url.replace('%20','_'))
console.log(url.includes('tushar'))

