const configureCors = require('cors');

const DEV_CORS_CONFIG = {
    origin: true,
};

const PROD_ORIGIN_WHITELIST = [
    'rossalexandra.com',
    'portfolio-f6e44.web.app',
    'portfolio-f6e44.firebaseapp.com',
];
const PROD_CORS_CONFIG = {
    origin: (origin, callback) => {
        const valid = PROD_ORIGIN_WHITELIST.some((validOrigin) =>
            String(origin).endsWith(validOrigin)
        );

        if (valid) callback(null, true);
        else callback(new Error('Not allowed by CORS'));
    },
};

exports.cors = process.env.FUNCTIONS_EMULATOR ?
    configureCors(DEV_CORS_CONFIG) : configureCors(PROD_CORS_CONFIG);
