const fs = require('fs')

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday'
}

const strbook = JSON.stringify(book)
console.log(strbook)

console.log(JSON.parse(strbook).title)
fs.writeFileSync('jsonBook.json', strbook)

const newbook = fs.readFileSync('jsonBook.json')

console.log(newbook.toString())
