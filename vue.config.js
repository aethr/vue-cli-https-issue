const path = require('path');

module.exports = {
    devServer: {
        server: {
            type: 'https',
            options: {
                key: path.resolve(process.env.HTTPS_KEY),
                cert: path.resolve(process.env.HTTPS_CERT),
            },
        },
    },
};

// HOST=localhost HTTPS_KEY=../.localhost/localhost+2-key.pem HTTPS_CERT=../.localhost/localhost+2.pem npm run serve