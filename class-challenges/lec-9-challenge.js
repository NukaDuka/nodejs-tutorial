const fs = require('fs')

fs.writeFileSync('./outputs/lec-9.txt', 'line 1\n')

fs.appendFileSync('./outputs/lec-9.txt', 'appended line 2\n')
console.log('Appended some text to ./outputs/lec-9.txt')
