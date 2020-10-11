const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./input files/lec-18.json').toString())
data.name = 'Bill'
fs.writeFileSync('./outputs/lec-18.json', JSON.stringify(data))
