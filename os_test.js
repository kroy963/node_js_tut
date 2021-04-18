
const os = require('os')

const users = os.userInfo()
console.log(users)

console.log(`Time: ${os.uptime()} sec`)

const cuttentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(cuttentOS)