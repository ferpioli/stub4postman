const newman = require('newman'),
      fs = require('fs');

newman.run({
    collection: require('./correios.postman_collection.json'),
    environment: require('./prd.postman_environment.json'),
    reporters: 'cli'
}).on('request', function (error, args) {
    if (error) {
        console.error(error);
    }
    else {
        fs.writeFile(`./results/${args.item.name}.json`, args.response.stream, (err) => {
            if (err) { 
                console.error(err); 
            }
        });        
    }
});