const newman = require('newman')
      fs = require('fs');
const { exec } = require('child_process');
const path = require("path");

console.log("===Executando servico stub===");

exec(`stubby -d cep.yml ${path.resolve(process.cwd())}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    console.log("==Stub OK ==")
});
setTimeout(() => {console.log("this is the first message")}, 15000);
newman.run({
    collection: require('./correios.postman_collection.json'),
    environment: require('./stub.postman_environment.json'),
    reporters: ['cli', 'htmlextra']
})