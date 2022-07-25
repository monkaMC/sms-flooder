const fs = require('fs');

var number = "?";

var flooder = {
    // this format: "+491791337069"
    setNumber: function(mobilenumber) {
        number = mobilenumber;
    },

    run: function() {
        if(number == "?") return console.log("You dont set the Number!");

        // take services
        const serviceFiles = fs.readdirSync('./services').filter(file => file.endsWith('.js'));
        for (const file of serviceFiles) {
            const service = require(`./services/` + file);
            service.run(number);
        }
    }
}

exports.flooder = flooder;