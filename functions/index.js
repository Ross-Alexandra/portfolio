const functions = require("firebase-functions");
const {cors} = require('./configure-cors');
const {responseObject} = require('./response-object');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try {
            functions.logger.info("Hello logs!", {structuredData: true});

            const res = responseObject({message: "Hello from Firebase!"});
            response.status(200).send(res);
        } catch (err) {
            console.log(err);
            response.status(500).send({error: err});
        }
    });
});
