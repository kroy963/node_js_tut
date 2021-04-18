const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/text_folder/text1.txt')
const second = readFileSync('./content/text_folder/text2.txt')

writeFileSync(
    './content/text_folder/text.txt',
    `Combine: ${first}, ${second}`,
    {flag: 'a'} // no over write
)